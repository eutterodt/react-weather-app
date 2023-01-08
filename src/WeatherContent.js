import React from "react";
import Head from "./Head";
import H2 from "./H2";
import Weather from "./Weather";

export default function WeatherContent() {
  return (
    <div className="wrapper">
      <Head />
      <H2 />
      <Weather />
    </div>
  );
}
