import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const { username } = useContext(AppContext);
  const { data, isLoading } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <h1> ....</h1>;
  }

  return (
    <h1>
      This is the home page, you are {username} and this is {data?.fact}{" "}
    </h1>
  );
};
