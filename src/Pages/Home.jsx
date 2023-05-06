import { useEffect, useState } from "react";
import { getAllUsers } from "../services/fetchAPI";
import { UsersList } from "../components/usersList";
import styled from "styled-components";
import { Box, Button, Select, Text } from "@chakra-ui/react";

export const Homepage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [filter, setFilter] = useState(null);
  const [isFilering, setIsFiltering] = useState(false);
  const [totalCards, setTotalCards] = useState(0);
  const [allUsers, setAllUsers] = useState([]);
  const [noMoreCards, setNoMoreCards] = useState(false);
  const [followNumber, setFollowNumber] = useState(0);
  const [isFollowingNumber, setIsFollowingNumber] = useState(0);
  useEffect(() => {
    console.log("first useEffect");
    getAllUsers().then((data) => {
      setTotalCards(data.length);
      setIsFollowingNumber(data.filter((el) => el.isFollowed === true).length);
      setFollowNumber(data.filter((el) => el.isFollowed === false).length);
    });
    getAllUsers(page, limit).then((data) => setAllUsers(data));
    setPage(page + 1);
  }, []);

  const handleLoadMore = async () => {
    await setPage((page) => (page += 1));

    getAllUsers(page, limit, filter).then((data) =>
      setAllUsers([...allUsers, ...data])
    );
  };
  useEffect(() => {
    setNoMoreCards(false);
    if (isFilering) {
      if (isFollowingNumber === allUsers.length) setNoMoreCards(true);
      if (followNumber === allUsers.length) setNoMoreCards(true);
      return;
    }
    if (allUsers.length === totalCards) setNoMoreCards(true);
    // console.log("noMoreCards", noMoreCards);
    // console.log("followNumber", followNumber);
    // console.log("isFollowingNumber", isFollowingNumber);
  }, [allUsers, followNumber, isFilering, isFollowingNumber, totalCards]);

  useEffect(() => {
    console.log("useEffect on filter");
    if (filter !== null) {
      getAllUsers(page, limit, filter).then((data) => {
        console.log("fetch in filter useEffect");
        setAllUsers(data);
      });

      setPage((page) => (page += 1));
    }
  }, [filter]);

  const handleFilter = (e) => {
    if (e.target.value === "") {
      console.log("if in filter handler");
      setPage(1);
      setFilter("");
      setIsFiltering(false);
      return;
    }
    setIsFiltering(true);

    setPage(1);
    setFilter(e.target.value);
  };
  return (
    <MainContainer>
      <Text align={"center"} fontSize="5xl">
        Tweets of our users
      </Text>

      <Box sx={filterStyle}>
        <Select
          id="filter"
          placeholder="Filter cards"
          onChange={(e) => handleFilter(e)}
        >
          <option value="">All cards</option>
          <option value="true">Followings</option>
          <option value="false">Follow</option>
        </Select>
      </Box>
      {totalCards > 0 && <UsersList props={allUsers} />}
      <Box
        marginTop='35px'
        marginBottom='35px'
        marginLeft='auto'
        marginRight='auto'
        disabled={noMoreCards}
        onClick={handleLoadMore}
        as="button"
        height="50px"
        width='196px'
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        // px='8px'
        borderRadius="18px"
        fontSize="22px"
        fontWeight="600"
        bg="#5CD3A8"
        boxShadow="0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)"
        // borderColor='#ccd0d5'
        color="#373737"
        _hover={{ bg: "#ebedf0" }}
        _active={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _disabled={{
           bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",}
        }
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
        {noMoreCards ? "No more cards" : "Load more cards"}
      </Box>
      {/* <Button
        disabled={noMoreCards}
        colorScheme="teal"
        variant="solid"
        onClick={handleLoadMore}
      >
        {noMoreCards ? "No more cards" : "Load more cards"}
      </Button> */}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
`;

const filterStyle = {
  marginBottom: "30px",
  width: "300px",
  marginLeft: "auto",
  marginRight: "auto",
};
