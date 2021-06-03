import React from "react";

const Greeting = ({ currentUser }) => {
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="greeting">
        Welcome to Printsy,{" "}
        {currentUser.username.charAt(0).toUpperCase() +
          currentUser.username.slice(1)}{" "}
        !
      </h2>
    </hgroup>
  );

  console.log(currentUser);
  return currentUser ? personalGreeting() : "";
};

export default Greeting;
