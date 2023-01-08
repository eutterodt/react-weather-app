import React from "react";
import CodedBy from "./CodedBy";
import WeatherContent from "./WeatherContent";

export default function WeatherApp() {
  return (
    <div className="outer-wrapper">
      <WeatherContent />
      <CodedBy />
    </div>
  );
}
