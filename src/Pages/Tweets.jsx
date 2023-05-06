import { useEffect, useRef, useState } from "react";
import { useLocation, useParams, Link as RLink } from "react-router-dom";
import { getSingleUser } from "../services/fetchAPI";
import {
  Box,
  Card,
  CardBody,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { cardStyle } from "../components/usersListItem";

export const TweetsPage = () => {
  const { id } = useParams();
  const [userTweets, setUserTweets] = useState();

  useEffect(() => {
    getSingleUser(id).then((data) => setUserTweets(data));
  }, [id]);

  return (
    <>
      <Box>
        <Link as={RLink} to={"/"} sx={LinkBoxStyle}>
          Go back
        </Link>
      </Box>
      {userTweets && <h2>Tweets of{userTweets.user}</h2>}
      <UnorderedList
        columns={2}
        spacing={10}
        listStyleType={"none"}
        sx={listStyle}
      >
        {userTweets &&
          userTweets.tweets.map((el) => (
            <ListItem key={el.tweet_id}>
              {" "}
              <Card sx={tweetCardStyle} variant={"outline"}>
                {" "}
                <CardBody>{el.tweet_text}</CardBody>
              </Card>{" "}
            </ListItem>
          ))}
      </UnorderedList>
    </>
  );
};

const tweetCardStyle = {
  ...cardStyle,
  flexGrow: "1",
  height: "100%",
  background:
    "linear-gradient(114.99deg, #dbd9df -0.99%, #afafb1 54.28%, #bab8c1 78.99%)",
};

const listStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "25px",
};

const LinkBoxStyle = {
  width: "155px",
  background: "linear-gradient(to right,#19ca2e ,#2b6738)",
  backgroundColor: "#19ca2e",
  color: "#fff",
  fontFamily: "serif",
  fontSize: "18px",
  padding: "14px 15px",
  borderRadius: "10px",
  display: "block",
  justifyContent: "center",
  alignItems: "center",
};
// a.my-button:hover{
//  background: linear-gradient(to right,#54d05c ,#5a7f61);
//  background-color: #54d05c;
// }
// a.my-button:active{
//  transform: scale(0.95);
// }
// }
