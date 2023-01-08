import React from "react";
import Temperature from "./Temperature";
import Weatherstats from "./Weatherstats";

export default function Weather() {
  return (
    <div className="row">
      <Temperature />
      <Weatherstats />
    </div>
  );
}
