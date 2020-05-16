import React from "react";
import ComponentA from "./components/ComponentA";
import "./styles.css";

export const UserContext = React.createContext();
export default function App() {
  const users = [
    { name: "nguyen", age: 20 },
    { name: "ba", age: 21 },
    { name: "nghia", age: 22 },
    { name: "dz", age: 23 }
  ];
  return (
    <div className="App">
      <UserContext.Provider value={users}>
        <ComponentA />
      </UserContext.Provider>
    </div>
  );
}
