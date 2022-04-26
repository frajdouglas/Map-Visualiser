// import { Jenks } from "jenks";
// // import { getData } from "./api.js";
// export const jenksClassification = (apiData) => {
//   // let timePeriod = "am"
//   // let metric = "total_flow"
//   // let year =  "2018"
//   // let scenario =  ""
//   // getData(
//   //   timePeriod,
//   //   metric,
//   //   year,
//   //   scenario
//   // ).then((dataFromApi) => {
//   //   console.log(dataFromApi.data)
//     let n_classes = 5;
//   let result = new Jenks(apiData, n_classes).naturalBreak();
//   console.log(result);
//   // });
//   // let n_classes = 5;
//   // let result = new Jenks(apiData, n_classes).naturalBreak();
//   // console.log(result);
//   // return result;
// };

export const colourNetwork = (
  mapState,
  timePeriod,
  metric,
  year,
  scenario,
  timePeriod2,
  year2,
  scenario2
) => {
  let paintPropertiesArraywhiteToMaroon = [
    "step",
    ["feature-state", "metric"],
    "#f7f4f9",
    365,
    "#e7e1ef",
    935,
    "#d4b9da",
    1810,
    "#c994c7",
    3100,
    "#df65b0",
    4715,
    "#e7298a",
    6950,
    "#ce1256",
    10275,
    "#980043",
    15345,
    "#67001f",
    21385,
    "#1b0008"
    ];
    let paintPropertiesArrayGreenToRed = [
      "step",
      ["feature-state", "metric"],
      "#3FDD00",
      365,
      "#6CE001",
      935,
      "#9AE302",
      1810,
      "#C7E603",
      3100,
      "#F5E904",
      4715,
      "#F0BE0C",
      6950,
      "#EC9315",
      10275,
      "#E7681D",
      15345,
      "#E33D26",
      21385,
      "#DF122F"
      ];
  let paintPropertiesArrayDifference = [
    "step",
    ["feature-state", "metric"],
    "#a50026",
    -10000,
    "#d73027",
    -5000,
    "#f46d43",
    -1000,
    "#fdae61",
    -100,
    "#fee090",
    0,
    "#e0f3f8",
    100,
    "#abd9e9",
    1000,
    "#74add1",
    5000,
    "#4575b4",
    10000,
    "#313695",
  ];
  if (metric === "total_flow" && timePeriod2) {
    paintPropertiesArrayDifference[3] = -10000;
    paintPropertiesArrayDifference[5] = -5000;
    paintPropertiesArrayDifference[7] = -1000;
    paintPropertiesArrayDifference[9] = -100;
    paintPropertiesArrayDifference[11] = 0;
    paintPropertiesArrayDifference[13] = 100;
    paintPropertiesArrayDifference[15] = 1000;
    paintPropertiesArrayDifference[17] = 5000;
    paintPropertiesArrayDifference[19] = 10000;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintPropertiesArrayDifference
    );
  } else if (metric === "netspd_kph" && timePeriod2) {
    paintPropertiesArrayDifference[3] = -100;
    paintPropertiesArrayDifference[5] = -40;
    paintPropertiesArrayDifference[7] = -15;
    paintPropertiesArrayDifference[9] = -4;
    paintPropertiesArrayDifference[11] = 0;
    paintPropertiesArrayDifference[13] = 4;
    paintPropertiesArrayDifference[15] = 15;
    paintPropertiesArrayDifference[17] = 40;
    paintPropertiesArrayDifference[19] = 100;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintPropertiesArrayDifference
    );
  } else if (metric === "netspd_kph") {
    // paintPropertiesArraywhiteToMaroon[3] = 15;
    // paintPropertiesArraywhiteToMaroon[5] = 26;
    // paintPropertiesArraywhiteToMaroon[7] = 37;
    // paintPropertiesArraywhiteToMaroon[9] = 46;
    // paintPropertiesArraywhiteToMaroon[11] = 57;
    // paintPropertiesArraywhiteToMaroon[13] = 70;
    // paintPropertiesArraywhiteToMaroon[15] = 84;
    // paintPropertiesArraywhiteToMaroon[17] = 99;
    // paintPropertiesArraywhiteToMaroon[19] = 115;

    paintPropertiesArrayGreenToRed[3] = 15;
    paintPropertiesArrayGreenToRed[5] = 26;
    paintPropertiesArrayGreenToRed[7] = 37;
    paintPropertiesArrayGreenToRed[9] = 46;
    paintPropertiesArrayGreenToRed[11] = 57;
    paintPropertiesArrayGreenToRed[13] = 70;
    paintPropertiesArrayGreenToRed[15] = 84;
    paintPropertiesArrayGreenToRed[17] = 99;
    paintPropertiesArrayGreenToRed[19] = 115;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintPropertiesArrayGreenToRed
    );
  } else if (metric === "total_flow") {
    // paintPropertiesArraywhiteToMaroon[3] = 365;
    // paintPropertiesArraywhiteToMaroon[5] = 935;
    // paintPropertiesArraywhiteToMaroon[7] = 1810;
    // paintPropertiesArraywhiteToMaroon[9] = 3100;
    // paintPropertiesArraywhiteToMaroon[11] = 4715;
    // paintPropertiesArraywhiteToMaroon[13] = 6950;
    // paintPropertiesArraywhiteToMaroon[15] = 10275;
    // paintPropertiesArraywhiteToMaroon[17] = 15345;
    // paintPropertiesArraywhiteToMaroon[19] = 21385;

    paintPropertiesArrayGreenToRed[3] = 365;
    paintPropertiesArrayGreenToRed[5] = 935;
    paintPropertiesArrayGreenToRed[7] = 1810;
    paintPropertiesArrayGreenToRed[9] = 3100;
    paintPropertiesArrayGreenToRed[11] = 4715;
    paintPropertiesArrayGreenToRed[13] = 6950;
    paintPropertiesArrayGreenToRed[15] = 10275;
    paintPropertiesArrayGreenToRed[17] = 15345;
    paintPropertiesArrayGreenToRed[19] = 21385;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintPropertiesArrayGreenToRed
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
