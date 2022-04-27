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
  console.log(colourPalette);
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
    '#FFFFFF',
    0,
    '#FFFFFF',
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
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintArrayDifference
    );
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
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintArrayDifference
    );
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
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintArray
    );
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
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintArray
    );
  }
  // mapState.setFilter("id", ['<=', 'id', 200]);
  // mapState.setFilter("id", ['<=', 'feature-state', 200]);

  // mapState.setFilter("id", [">=", ["get", "feature-state"],1]);
  // // mapState.setLayoutProperty('id', 'visibility', ["get", "feature-state"],2);
  // mapState.setLayoutProperty('halo', 'visibility', "none");

  //  if (metric === "netspd_kph" && timePeriod2) {
  //   paintPropertiesArrayRedToGreyToGreen[3] = -20;
  //   paintPropertiesArrayRedToGreyToGreen[5] = -10;
  //   paintPropertiesArrayRedToGreyToGreen[7] = 0;
  //   paintPropertiesArrayRedToGreyToGreen[9] = 10;
  //   paintPropertiesArrayRedToGreyToGreen[11] = 20;
  //     return mapState.setPaintProperty(
  //       "id",
  //       "line-color",
  //       paintPropertiesArrayRedToGreyToGreen
  //     );
  //   }
};
//   } else if (metric === "total_flow") {
//     paintPropertiesArrayGreenToRed[3] = 0;
//     paintPropertiesArrayGreenToRed[5] = 900;
//     paintPropertiesArrayGreenToRed[7] = 2800;
//     paintPropertiesArrayGreenToRed[9] = 6400;
//     paintPropertiesArrayGreenToRed[11] = 16000;

//     return mapState.setPaintProperty(
//       "id",
//       "line-color",
//       paintPropertiesArrayGreenToRed
//     );
//   } else if (metric === "netspd_kph") {
//     paintPropertiesArrayRedToGreen[3] = 0;
//     paintPropertiesArrayRedToGreen[5] = 30;
//     paintPropertiesArrayRedToGreen[7] = 55;
//     paintPropertiesArrayRedToGreen[9] = 82;
//     paintPropertiesArrayRedToGreen[11] = 113;
//     return mapState.setPaintProperty(
//       "id",
//       "line-color",
//       paintPropertiesArrayRedToGreen
//     );
//   } else if (metric === "car_eb") {
//     paintPropertiesArrayGreenToRed[3] = 0;
//     paintPropertiesArrayGreenToRed[5] = 250;
//     paintPropertiesArrayGreenToRed[7] = 760;
//     paintPropertiesArrayGreenToRed[9] = 1600;
//     paintPropertiesArrayGreenToRed[11] = 3000;
//     return mapState.setPaintProperty(
//       "id",
//       "line-color",
//       paintPropertiesArrayGreenToRed
//     );
//   } else if (metric === "car_comm") {
//     paintPropertiesArrayGreenToRed[3] = 0;
//     paintPropertiesArrayGreenToRed[5] = 600;
//     paintPropertiesArrayGreenToRed[7] = 2000;
//     paintPropertiesArrayGreenToRed[9] = 4580;
//     paintPropertiesArrayGreenToRed[11] = 12000;
//     return mapState.setPaintProperty(
//       "id",
//       "line-color",
//       paintPropertiesArrayGreenToRed
//     );
//   } else if (metric === "car_other") {
//     paintPropertiesArrayGreenToRed[3] = 0;
//     paintPropertiesArrayGreenToRed[5] = 500;
//     paintPropertiesArrayGreenToRed[7] = 1600;
//     paintPropertiesArrayGreenToRed[9] = 4400;
//     paintPropertiesArrayGreenToRed[11] = 10500;
//     return mapState.setPaintProperty(
//       "id",
//       "line-color",
//       paintPropertiesArrayGreenToRed
//     );
//   } else if (metric === "lgv_flow") {
//     paintPropertiesArrayGreenToRed[3] = 0;
//     paintPropertiesArrayGreenToRed[5] = 70;
//     paintPropertiesArrayGreenToRed[7] = 210;
//     paintPropertiesArrayGreenToRed[9] = 480;
//     paintPropertiesArrayGreenToRed[11] = 900;
//     return mapState.setPaintProperty(
//       "id",
//       "line-color",
//       paintPropertiesArrayGreenToRed
//     );
//   } else if (metric === "hgv_flow") {
//     paintPropertiesArrayGreenToRed[3] = 0;
//     paintPropertiesArrayGreenToRed[5] = 125;
//     paintPropertiesArrayGreenToRed[7] = 415;
//     paintPropertiesArrayGreenToRed[9] = 950;
//     paintPropertiesArrayGreenToRed[11] = 1800;
//     return mapState.setPaintProperty(
//       "id",
//       "line-color",
//       paintPropertiesArrayGreenToRed
//     );
//   } else if (metric === "link_voc") {
//     paintPropertiesArrayGreenToRed[3] = 0;
//     paintPropertiesArrayGreenToRed[5] = 13;
//     paintPropertiesArrayGreenToRed[7] = 35;
//     paintPropertiesArrayGreenToRed[9] = 58;
//     paintPropertiesArrayGreenToRed[11] = 86;
//     return mapState.setPaintProperty(
//       "id",
//       "line-color",
//       paintPropertiesArrayGreenToRed
//     );
//   } else {
//     console.log("NOTHING TRIGGERED");
//   }
// };
