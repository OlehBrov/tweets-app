import { useEffect, useState } from "react";
import { getAllUsers } from "../services/fetchAPI";
import { UsersList } from "../components/usersList";
import styled from "styled-components";
import { Box, Button, Select } from "@chakra-ui/react";

export const Homepage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [filter, setFilter] = useState("");
  const [totalCards, setTotalCards] = useState(0);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((data) => setTotalCards(data.length));
    getAllUsers(page, limit).then((data) => setAllUsers(data));
  }, []);

  const handleLoadMore = () => {
    getAllUsers(page, limit, filter).then((data) =>
      setAllUsers([...allUsers, ...data])
    );
    setPage((page) => (page += 1));
  };

  useEffect(() => {
    getAllUsers(page, limit, filter).then((data) => setAllUsers(data));
    setPage((page) => (page += 1));
  }, [filter]);

  const handleFilter = async (e) => {
    if (e.target.value === "all") {
      setPage(1);
      setFilter("");
    }
    setPage(1);
    setFilter(e.target.value);
  };
  return (
    <MainContainer>
      <h1>Tweets users</h1>
      <Box>
        <Select
          id="filter"
          placeholder="Select option"
          onChange={(e) => handleFilter(e)}
        >
          <option value="">All cards</option>
          <option value="true">Followings</option>
          <option value="false">Follow</option>
        </Select>
      </Box>
      {totalCards > 0 && <UsersList props={allUsers} />}
      <Button colorScheme="teal" variant="solid" onClick={handleLoadMore}>
        Load more cards
      </Button>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;
