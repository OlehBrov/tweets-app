import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../services/fetchAPI";
import { Card, CardBody, ListItem, UnorderedList } from "@chakra-ui/react";
import { cardStyle } from "../components/usersListItem";

export const TweetsPage = () => {
  const { id } = useParams();

  const [userTweets, setUserTweets] = useState();
  useEffect(() => {
    getSingleUser(id).then((data) => setUserTweets(data));
  }, [id]);

  return (
    <>
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
