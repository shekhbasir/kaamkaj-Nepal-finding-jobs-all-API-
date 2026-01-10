import React from "react";
import Nav from "./Nav";
import Searchwala from "../sabchotchij/Searchwala";
import Casoursab from "../sabchotchij/Casoursab";
import Latestjobs from "../sabchotchij/Latestjobs";

function Home() {
  return (
    <>
      <div>
        <Searchwala></Searchwala>
        <Casoursab />

        <Latestjobs />
      </div>
    </>
  );
}

export default Home;
