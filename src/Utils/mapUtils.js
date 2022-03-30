// A method of setting symbology based on inputs.
export const joinAPIData = (
  mapState,
  timePeriod,
  metric,
  year,
  scenario,
  timePeriod2,
  year2,
  scenario2
) => {
  let paintPropertiesArrayRedToGreen = [
    "interpolate",
    ["linear"],
    ["feature-state", "metric"],
    1,
    "#FF1010",
    2,
    "#FE7408",
    3,
    "#FDD900",
    4,
    "#A4CF01",
    5,
    "#4CC602",
  ];
  let paintPropertiesArrayGreenToRed = [
    "interpolate",
    ["linear"],
    ["feature-state", "metric"],
    1,
    "#4CC602",
    2,
    "#A4CF01",
    3,
    "#FDD900",
    4,
    "#FE7408",
    5,
    "#FF1010",
  ];
  if (metric === "total_flow" && timePeriod2) {
    return mapState.setPaintProperty("id", "line-color", [
      "interpolate",
      ["linear"],
      ["feature-state", "metric"],
      -500,
      "#FF160C",
      0,
      "#FFFF00",
      500,
      "#39FF14",
    ]);
  } else if (metric === "netspd_kph" && timePeriod2) {
    return mapState.setPaintProperty("id", "line-color", [
      "interpolate",
      ["linear"],
      ["feature-state", "metric"],
      -10,
      "#FF160C",
      0,
      "#FFFF00",
      10,
      "#39FF14",
    ]);
  } else if (metric === "total_flow") {

    paintPropertiesArrayGreenToRed[3] = 0
    paintPropertiesArrayGreenToRed[5] = 900
    paintPropertiesArrayGreenToRed[7] = 2800
    paintPropertiesArrayGreenToRed[9] = 6400
    paintPropertiesArrayGreenToRed[11] = 16000

    return mapState.setPaintProperty("id", "line-color", paintPropertiesArrayGreenToRed);
  } else if (metric === "netspd_kph") {

    paintPropertiesArrayRedToGreen[3] = 0
    paintPropertiesArrayRedToGreen[5] = 30
    paintPropertiesArrayRedToGreen[7] = 55
    paintPropertiesArrayRedToGreen[9] = 82
    paintPropertiesArrayRedToGreen[11] = 113
    return mapState.setPaintProperty("id", "line-color", paintPropertiesArrayRedToGreen);
  } else if (metric === "car_eb") {
    return mapState.setPaintProperty("id", "line-color", [
      "interpolate",
      ["linear"],
      ["feature-state", "metric"],
      0,
      "#39FF14",
      2500,
      "#FFFF00",
      5000,
      "#FF160C",
    ]);
  } else if (metric === "car_comm") {
    return mapState.setPaintProperty("id", "line-color", [
      "interpolate",
      ["linear"],
      ["feature-state", "metric"],
      0,
      "#39FF14",
      5000,
      "#FFFF00",
      10000,
      "#FF160C",
    ]);
  } else if (metric === "car_other") {
    return mapState.setPaintProperty("id", "line-color", [
      "interpolate",
      ["linear"],
      ["feature-state", "metric"],
      0,
      "#39FF14",
      4000,
      "#FFFF00",
      7000,
      "#FF160C",
    ]);
  } else if (metric === "lgv_flow") {
    return mapState.setPaintProperty("id", "line-color", [
      "interpolate",
      ["linear"],
      ["feature-state", "metric"],
      0,
      "#39FF14",
      300,
      "#FFFF00",
      700,
      "#FF160C",
    ]);
  } else if (metric === "hgv_flow") {
    return mapState.setPaintProperty("id", "line-color", [
      "interpolate",
      ["linear"],
      ["feature-state", "metric"],
      0,
      "#39FF14",
      500,
      "#FFFF00",
      3000,
      "#FF160C",
    ]);
  } else if (metric === "link_voc") {
    return mapState.setPaintProperty("id", "line-color", [
      "interpolate",
      ["linear"],
      ["feature-state", "metric"],
      0,
      "#39FF14",
      50,
      "#FFFF00",
      150,
      "#FF160C",
    ]);
  } else {
    console.log("NOTHING TRIGGERED");
  }
};
