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
  let paintPropertiesArrayRedToGreyToGreen = [
    "interpolate",
    ["linear"],
    ["feature-state", "metric"],
    1,
    "#FF1010",
    2,
    "#FE7408",
    3,
    "#f0f5f1",
    4,
    "#A4CF01",
    5,
    "#4CC602",
  ];
 if (metric === "netspd_kph" && timePeriod2) {
  paintPropertiesArrayRedToGreyToGreen[3] = -20;
  paintPropertiesArrayRedToGreyToGreen[5] = -10;
  paintPropertiesArrayRedToGreyToGreen[7] = 0;
  paintPropertiesArrayRedToGreyToGreen[9] = 10;
  paintPropertiesArrayRedToGreyToGreen[11] = 20;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintPropertiesArrayRedToGreyToGreen
    );
  } else if (metric !== "netspd_kph" && timePeriod2) {
    paintPropertiesArrayRedToGreyToGreen[3] = -1000;
    paintPropertiesArrayRedToGreyToGreen[5] = -500;
    paintPropertiesArrayRedToGreyToGreen[7] = 0;
    paintPropertiesArrayRedToGreyToGreen[9] = 500;
    paintPropertiesArrayRedToGreyToGreen[11] = 1000;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintPropertiesArrayRedToGreyToGreen
    );
  } else if (metric === "total_flow") {
    paintPropertiesArrayGreenToRed[3] = 0;
    paintPropertiesArrayGreenToRed[5] = 900;
    paintPropertiesArrayGreenToRed[7] = 2800;
    paintPropertiesArrayGreenToRed[9] = 6400;
    paintPropertiesArrayGreenToRed[11] = 16000;

    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintPropertiesArrayGreenToRed
    );
  } else if (metric === "netspd_kph") {
    paintPropertiesArrayRedToGreen[3] = 0;
    paintPropertiesArrayRedToGreen[5] = 30;
    paintPropertiesArrayRedToGreen[7] = 55;
    paintPropertiesArrayRedToGreen[9] = 82;
    paintPropertiesArrayRedToGreen[11] = 113;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintPropertiesArrayRedToGreen
    );
  } else if (metric === "car_eb") {
    paintPropertiesArrayGreenToRed[3] = 0;
    paintPropertiesArrayGreenToRed[5] = 250;
    paintPropertiesArrayGreenToRed[7] = 760;
    paintPropertiesArrayGreenToRed[9] = 1600;
    paintPropertiesArrayGreenToRed[11] = 3000;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintPropertiesArrayGreenToRed
    );
  } else if (metric === "car_comm") {
    paintPropertiesArrayGreenToRed[3] = 0;
    paintPropertiesArrayGreenToRed[5] = 600;
    paintPropertiesArrayGreenToRed[7] = 2000;
    paintPropertiesArrayGreenToRed[9] = 4580;
    paintPropertiesArrayGreenToRed[11] = 12000;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintPropertiesArrayGreenToRed
    );
  } else if (metric === "car_other") {
    paintPropertiesArrayGreenToRed[3] = 0;
    paintPropertiesArrayGreenToRed[5] = 500;
    paintPropertiesArrayGreenToRed[7] = 1600;
    paintPropertiesArrayGreenToRed[9] = 4400;
    paintPropertiesArrayGreenToRed[11] = 10500;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintPropertiesArrayGreenToRed
    );
  } else if (metric === "lgv_flow") {
    paintPropertiesArrayGreenToRed[3] = 0;
    paintPropertiesArrayGreenToRed[5] = 70;
    paintPropertiesArrayGreenToRed[7] = 210;
    paintPropertiesArrayGreenToRed[9] = 480;
    paintPropertiesArrayGreenToRed[11] = 900;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintPropertiesArrayGreenToRed
    );
  } else if (metric === "hgv_flow") {
    paintPropertiesArrayGreenToRed[3] = 0;
    paintPropertiesArrayGreenToRed[5] = 125;
    paintPropertiesArrayGreenToRed[7] = 415;
    paintPropertiesArrayGreenToRed[9] = 950;
    paintPropertiesArrayGreenToRed[11] = 1800;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintPropertiesArrayGreenToRed
    );
  } else if (metric === "link_voc") {
    paintPropertiesArrayGreenToRed[3] = 0;
    paintPropertiesArrayGreenToRed[5] = 13;
    paintPropertiesArrayGreenToRed[7] = 35;
    paintPropertiesArrayGreenToRed[9] = 58;
    paintPropertiesArrayGreenToRed[11] = 86;
    return mapState.setPaintProperty(
      "id",
      "line-color",
      paintPropertiesArrayGreenToRed
    );
  } else {
    console.log("NOTHING TRIGGERED");
  }
};
