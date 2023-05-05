import { useEffect, useState } from "react";
import { getAllUsers } from "../services/fetchAPI";
import { UsersList } from "../components/usersList";

export const Homepage = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then((data) => setAllUsers(data));
    console.log("allUsers", allUsers);
  }, []);


  return (
    <>
          <h1>Tweets users</h1>
          {allUsers.length > 0 && <UsersList props={allUsers} />}
      
    </>
  );
};

