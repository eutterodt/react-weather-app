import React from "react";
import Temperature from "./Temperature";
import Weatherstats from "./Weatherstats";
import axios from "axios";

export default function Weather() {
  return (
    <div className="row">
      <Temperature />
      <Weatherstats />
    </div>
  );
}
