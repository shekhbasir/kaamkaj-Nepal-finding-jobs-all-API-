import React from "react";
import Nav from "./Nav";
import Searchwala from "../sabchotchij/Searchwala";
import Casoursab from "../sabchotchij/Casoursab";
import Latestjobs from "../sabchotchij/Latestjobs";

function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto scroll-smooth">
        <Searchwala />
        <Casoursab />
        <Latestjobs />
      </div>
    </div>
  );
}

export default Home;
