import { useEffect, useState } from "react";
import { getAllUsers } from "../services/fetchAPI";
import { UsersList } from "../components/usersList";
import styled from "styled-components";
import { Box, Select, Text } from "@chakra-ui/react";
// import { useSearchParams } from "react-router-dom";
import {filterStyle, noMoreCardsBtnStyle} from './HomeStyles'

export const searchCardsParams = ({ params }) => {
  const queryParams = params;
  console.log("params", params);
  return queryParams;
};

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
    getAllUsers().then((res) => {
      setTotalCards(res.data.length);
      setIsFollowingNumber(
        res.data.filter((el) => el.isFollowed === true).length
      );
      setFollowNumber(res.data.filter((el) => el.isFollowed === false).length);
    });
    getAllUsers(page, limit).then((res) => setAllUsers(res.data));
    setPage(page + 1);
    setLimit(4)
  }, []);



  const handleLoadMore = async () => {
    await setPage((page) => (page += 1));

    getAllUsers(page, limit, filter).then((res) =>
      setAllUsers([...allUsers, ...res.data])
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
  }, [allUsers, followNumber, isFilering, isFollowingNumber, totalCards]);

  useEffect(() => {
    if (filter !== null) {
      getAllUsers(page, limit, filter).then((res) => {
        setAllUsers(res.data);
      });

      setPage((page) => (page += 1));
    }
  }, [filter]);

  const handleFilter = (e) => {
    if (e.target.value === "") {
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
        
        sx={noMoreCardsBtnStyle}
       
        disabled={noMoreCards}
        onClick={handleLoadMore}
        as="button"
        
        _hover={{ bg: "#ebedf0" }}
        _active={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _disabled={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
        {noMoreCards ? "No more cards" : "Load more cards"}
      </Box>
      
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
`;

