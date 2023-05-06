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
import { Link as RLink, useLocation } from 'react-router-dom';
 
export const UsersListItem = ({ props }) => {
  const [isFollowed, setIsFollowed] = useState(props.isFollowed);
  const [followers, setFollowers] = useState(props.followers);
  const [initiateUpdate, setInitiateUpdate] = useState(false);
  // console.log("props UsersListItem", props);
  const location = useLocation()
  // console.log('props.tweets.length', props.tweets.length)
  useEffect(() => {
    if (initiateUpdate) {
      followersUpdate({
        ...props,
        isFollowed,
        followers,
      });
      setInitiateUpdate(false)  
    }
  }, [isFollowed, followers, initiateUpdate, props]);

  const handleButton = async () => {
    setIsFollowed((isFollowed) => !isFollowed);
    setFollowers((followers) => (isFollowed ? followers - 1 : followers + 1));
   setInitiateUpdate(true)  
  };

  return (
    <li >
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
            <RLink to={`/tweets/${props.id}`}state={{from:location}}><Text sx={TextStyle} mb={"16px"}>
              {props.tweets.length} TWEETS
            </Text></RLink> 
            <Text sx={TextStyle}>{followers} FOLLOWERS</Text>
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

export const cardStyle = {
  display: "flex",
  flexDirection: "column",
  width: "380px",
  height: "460px",
  background:
    "linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)",
  boxShadow: "-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)",
  borderRadius: "20px",
};

const LineStyle = {
  marginTop: "18px",
  width: "380px",
  height: "8px",
  marginLeft: "-20px",
  background: "#EBD8FF",
  boxShadow:
    "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF",
};

const ImageWrapStyle = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  background: "#EBD8FF",
  boxShadow:
    "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const ImageStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const TextStyle = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "20px",
  lineHeight: "24px",
  textTransform: "uppercase",
  color: "#EBD8FF",
};

const TextAlign = {
  marginTop: "62px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const ButtonStyle = {
  width: "196px",
  height: "50px",
  marginTop: "26px",
  borderRadius: "10px",
  ...TextStyle,
  color: "#373737",
};



