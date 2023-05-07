import { useEffect, useState } from "react";
import { useParams, Link as RLink } from "react-router-dom";
import { getSingleUser } from "../services/fetchAPI";
import {
  Box,
  Card,
  CardBody,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import {tweetCardStyle, listStyle, LinkBoxStyle} from './TweetsStyles'

export const TweetsPage = () => {
  const { id } = useParams();
  const [userTweets, setUserTweets] = useState();

  useEffect(() => {
    getSingleUser(id).then((data) => setUserTweets(data));
  }, [id]);

  return (
    <>
      <Box sx={{ marginTop: "25px", marginLeft: "25px" }}>
        <Link
          as={RLink}
          to={"/"}
          sx={LinkBoxStyle}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
        >
          Go back
        </Link>
      </Box>

      {userTweets && (
        <Text align={"center"} fontSize="5xl">
          Tweets of {userTweets.user}
        </Text>
      )}
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

