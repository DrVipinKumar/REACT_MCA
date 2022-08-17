import React from "react";
import "./App.css";

function App() {
  const name = [
    { id: 1, user: "user1" },
    { id: 2, user: "user2" },
    { id: 3, user: "user3" },
    { id: 4, user: "user4" },
    { id: 5, user: "user5" },
    { id: 6, user: "user6" },
  ];
  return (
    <div>
      <h2>Welcome You All to React App</h2>
      <h3>User Name are</h3>
      <ul>
        {name.map((user) => (
          <li key={user.id}>{user.user}</li>
        ))}
      </ul>
    </div>
  );
  // return (
  //   <div className="App">
  //   </div>
  // );
}

export default App;
