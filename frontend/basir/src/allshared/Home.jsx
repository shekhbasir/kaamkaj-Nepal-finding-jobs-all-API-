import React from "react";
import Nav from "./Nav";
import Searchwala from "../sabchotchij/Searchwala";
import Casoursab from "../sabchotchij/Casoursab";

function Home() {
  return (
    <>
      <div>
        <Searchwala></Searchwala>
        <Casoursab />
      </div>
    </>
  );
}

export default Home;
