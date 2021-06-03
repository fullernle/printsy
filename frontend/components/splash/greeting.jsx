import React from "react";

const Greeting = ({ currentUser }) => {
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h1 className="greeting">
        Welcome to Printsy,{" "}
        {currentUser.username.charAt(0).toUpperCase() +
          currentUser.username.slice(1)}!
      </h1>
    </hgroup>
  );

  return currentUser ? personalGreeting() : "";
};

export default Greeting;
