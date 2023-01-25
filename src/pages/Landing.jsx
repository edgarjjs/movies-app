import React from "react";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { Main } from "../components/Main";
import { Tv } from "../components/Tv";


export const Landing = () => {
  return (
    <>
      <Header />
      <Search />
      <Main />
      <Tv />
    </>
  );
};
