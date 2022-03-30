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
  let paintPropertiesArray = [
    "interpolate",
    ["linear"],
    ["feature-state", "metric"],
    1,
    "#fcde9c",
    2,
    "#faa476",
    3,
    "#e34f6f",
    4,
    "#b9257a",
    5,
    "#7c1d6f",
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

    paintPropertiesArray[3] = 0
    paintPropertiesArray[5] = 900
    paintPropertiesArray[7] = 2800
    paintPropertiesArray[9] = 6400
    paintPropertiesArray[11] = 16000

    return mapState.setPaintProperty("id", "line-color", paintPropertiesArray);
  } else if (metric === "netspd_kph") {
    return mapState.setPaintProperty("id", "line-color", [
      "interpolate",
      ["linear"],
      ["feature-state", "metric"],
      0,
      "#FF160C",
      50,
      "#FFFF00",
      100,
      "#39FF14",
    ]);
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
