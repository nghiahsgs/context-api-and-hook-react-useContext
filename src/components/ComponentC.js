import React, { useContext } from "react";
import { UserContext } from "../App";
const ComponentC = () => {
  const users = useContext(UserContext);
  // const users = [
  //   { name: "nguyen", age: 20 },
  //   { name: "ba", age: 21 },
  //   { name: "nghia", age: 22 },
  //   { name: "dz", age: 23 }
  // ];

  return (
    <ul>
      {users.map((user, index) => {
        return <li key={index}>{user.name}</li>;
      })}
    </ul>
  );
};
export default ComponentC;
