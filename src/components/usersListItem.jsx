import {
  Card,
  CardBody,
  Link,
  Image,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import logo from "../images/Logo.png";
import puzzle from "../images/puzzle.png";
import { useEffect, useState } from "react";
import { followersUpdate } from "../services/fetchAPI";
import { Link as RLink, useLocation } from "react-router-dom";
import{cardStyle, LineStyle, ImageWrapStyle, ImageStyle,TextStyle, TextAlign, ButtonStyle } from './userListItemStyles'

export const UsersListItem = ({ props }) => {
  const [isFollowed, setIsFollowed] = useState(props.isFollowed);
  const [followers, setFollowers] = useState(props.followers);
  const [initiateUpdate, setInitiateUpdate] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (initiateUpdate) {
      followersUpdate({
        ...props,
        isFollowed,
        followers,
      });
      setInitiateUpdate(false);
    }
  }, [isFollowed, followers, initiateUpdate, props]);

  const handleButton = async () => {
    setIsFollowed((isFollowed) => !isFollowed);
    setFollowers((followers) => (isFollowed ? followers - 1 : followers + 1));
    setInitiateUpdate(true);
  };

  return (
    <li>
      <Card sx={cardStyle}>
        <CardBody>
          <Box>
            <Link href="https://goit.global/ua/">
              <Image src={logo} />
            </Link>
            <Image src={puzzle} />
          </Box>
          <Box>
            <Box sx={LineStyle}></Box>
            <Box sx={ImageWrapStyle}>
              <Image
                borderRadius="full"
                boxSize="64px"
                src={props.avatar}
                // src="https://i.pravatar.cc/200"
                sx={ImageStyle}
              />
            </Box>
          </Box>
          <Box sx={TextAlign}>
            <RLink to={`/tweets/${props.id}`} state={{ from: location }}>
              <Text sx={TextStyle} mb={"16px"}>
                {props.tweets.length} TWEETS
              </Text>
            </RLink>
            <Text sx={TextStyle}>{followers.toLocaleString('en-US')} FOLLOWERS</Text>
            <Button
              sx={ButtonStyle}
              background={isFollowed ? "#5CD3A8" : "#EBD8FF"}
              onClick={() => handleButton()}
            >
              {isFollowed ? "Followed" : "Follow"}
            </Button>
          </Box>
        </CardBody>
      </Card>
    </li>
  );
};

