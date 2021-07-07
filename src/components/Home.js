import React from "react";
import { Heading } from "./Heading";
import { Navigation } from "./Navigation";
import { UserList } from "./UserList";
import "./style.css";

export const Home = () => {
  return (
    <div>
      <Heading />
      <Navigation />
      <UserList />
    </div>
  );
};
