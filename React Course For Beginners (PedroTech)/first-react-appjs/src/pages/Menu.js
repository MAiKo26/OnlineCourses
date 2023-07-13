import { useState } from "react";
import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Menu = () => {
  const { username } = useContext(AppContext);

  return (
    <div>
      {" "}
      <h1> This is the Menu page and the eater is {username} </h1>
      <ChangeProfile />
    </div>
  );
};
