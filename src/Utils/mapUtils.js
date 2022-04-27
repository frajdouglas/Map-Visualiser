export const colourNetwork = (
  colourPalette,
  mapState,
  timePeriod,
  metric,
  year,
  scenario,
  timePeriod2,
  year2,
  scenario2
) => {
  let paintArray = [
    "step",
    ["feature-state", "metric"],
    colourPalette[1],
    365,
    colourPalette[2],
    935,
    colourPalette[3],
    1810,
    colourPalette[4],
    3100,
    colourPalette[5],
    4715,
    colourPalette[6],
    6950,
    colourPalette[7],
    10275,
    colourPalette[8],
    15345,
    colourPalette[9],
    21385,
    colourPalette[10],
  ];

  let paintArrayDifference = [
    "step",
    ["feature-state", "metric"],
    colourPalette[1],
    -10000,
    colourPalette[2],
    -5000,
    colourPalette[3],
    -1000,
    colourPalette[4],
    -100,
    "#FFFFFF",
    0,
    "#FFFFFF",
    100,
    colourPalette[7],
    1000,
    colourPalette[8],
    5000,
    colourPalette[9],
    10000,
    colourPalette[10],
  ];

  if (metric === "total_flow" && timePeriod2) {
    paintArrayDifference[3] = -10000;
    paintArrayDifference[5] = -5000;
    paintArrayDifference[7] = -1000;
    paintArrayDifference[9] = -100;
    paintArrayDifference[11] = 0;
    paintArrayDifference[13] = 100;
    paintArrayDifference[15] = 1000;
    paintArrayDifference[17] = 5000;
    paintArrayDifference[19] = 10000;
    return mapState.setPaintProperty("id", "line-color", paintArrayDifference);
  } else if (metric === "netspd_kph" && timePeriod2) {
    paintArrayDifference[3] = -50;
    paintArrayDifference[5] = -35;
    paintArrayDifference[7] = -15;
    paintArrayDifference[9] = -5;
    paintArrayDifference[11] = 0;
    paintArrayDifference[13] = 5;
    paintArrayDifference[15] = 15;
    paintArrayDifference[17] = 35;
    paintArrayDifference[19] = 50;
    return mapState.setPaintProperty("id", "line-color", paintArrayDifference);
  } else if (metric === "netspd_kph") {
    paintArray[3] = 15;
    paintArray[5] = 26;
    paintArray[7] = 37;
    paintArray[9] = 46;
    paintArray[11] = 57;
    paintArray[13] = 70;
    paintArray[15] = 84;
    paintArray[17] = 99;
    paintArray[19] = 115;
    return mapState.setPaintProperty("id", "line-color", paintArray);
  } else if (metric === "total_flow") {
    paintArray[3] = 365;
    paintArray[5] = 935;
    paintArray[7] = 1810;
    paintArray[9] = 3100;
    paintArray[11] = 4715;
    paintArray[13] = 6950;
    paintArray[15] = 10275;
    paintArray[17] = 15345;
    paintArray[19] = 21385;
    return mapState.setPaintProperty("id", "line-color", paintArray);
  } else if (metric === "car_eb") {
    paintArray[3] = 0;
    paintArray[7] = 250;
    paintArray[11] = 760;
    paintArray[15] = 1600;
    paintArray[19] = 3000;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintArray
    );
  } else if (metric === "car_comm") {
    paintArray[3] = 0;
    paintArray[7] = 600;
    paintArray[11] = 2000;
    paintArray[15] = 4580;
    paintArray[19] = 12000;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintArray
    );
  } else if (metric === "car_other") {
    paintArray[3] = 0;
    paintArray[7] = 500;
    paintArray[11] = 1600;
    paintArray[15] = 4400;
    paintArray[19] = 10500;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintArray
    );
  } else if (metric === "lgv_flow") {
    paintArray[3] = 0;
    paintArray[7] = 70;
    paintArray[11] = 210;
    paintArray[15] = 480;
    paintArray[19] = 900;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintArray
    );
  } else if (metric === "hgv_flow") {
    paintArray[3] = 0;
    paintArray[7] = 125;
    paintArray[11] = 415;
    paintArray[15] = 950;
    paintArray[19] = 1800;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintArray
    );
  } else if (metric === "link_voc") {
    paintArray[3] = 0;
    paintArray[7] = 13;
    paintArray[11] = 35;
    paintArray[15] = 58;
    paintArray[19] = 86;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintArray
    );
  } else {
  }
};
