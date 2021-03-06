import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Popup from "../Popup.component/Popup";
import { colourNetwork } from "../../Utils/mapUtils.js";
// import { CSVLink } from "react-csv";
import "./download.css";
import Button from "@mui/material/Button";
import Legend from "./Legend";
import "./Map.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

const Map = ({
  apiData,
  submittedFilterDefinition,
  panLocation,
  zoomToLookup,
}) => {
  let {
    timePeriod,
    metric,
    year,
    scenario,
    timePeriod2,
    year2,
    scenario2,
  } = submittedFilterDefinition;
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 20 }));
  const [mapState, setMap] = useState(null);
  const mapContainer = useRef(null);
  const [colourPalette, setColourPalette] = useState([
    "green",
    "#3FDD00",
    "#6CE001",
    "#9AE302",
    "#C7E603",
    "#F5E904",
    "#F0BE0C",
    "#EC9315",
    "#E7681D",
    "#E33D26",
    "#DF122F",
  ]);
  const [filterBoolean, setIsFilter] = useState(true);
  // Add vector layer lookup into here once uploaded and try switching between years.
  // let sourceLayerLookup = {
  //   2018: "refCase_2018_network_offset_30",
  //   2050: "refCase_2050_network_offset_30_new",
  // };
  let sourceLayerLookup = {
    2018: "refCase2018_with_zc_70_offset-97dxga",
    2050: "refCase_2050_network_offset_3-a65f6b",
  };
  // Map creation, runs on first component render only. Note that
  // the map.on(load) listener is async hence the next use effect will be triggered before the code in the on load function is triggered.
  // this is why we needed a separate useEffect for joining the apidata to the vector layer.
  // We add all the required sources here and add a dummy "id" layer to instantly removed in next useEffect and replace with the required layer.

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v9",
      // style: "http://localhost:5000/style/style_dark_TEST",
      // style: "https://vector-tile-server.azurewebsites.net/style/style_light",
      // style: "https://api.os.uk/maps/vector/v1/vts?key=loCPaE9h9T3ZflTrKUqQfDyQCJBabErh",
      // style: "https://api.os.uk/maps/vector/v1/vts/resources/styles?srs=27700&key=loCPaE9h9T3ZflTrKUqQfDyQCJBabErh",
      center: [-1.826, 54.306],
      zoom: 7,
    });

    // Disable default box zooming.
    map.boxZoom.disable();

    map.on("load", () => {
      map.addControl(new mapboxgl.FullscreenControl(), "bottom-right");
      map.addSource("2018", {
        type: "vector",
        // tiles: [
        //   "https://vector-tile-server.azurewebsites.net/tiles/noham_network_2018_tiles/{z}/{x}/{y}.pbf",
        //   // "http://localhost:5000/tiles/noham_network_2018_tiles/{z}/{x}/{y}.pbf",
        // ],
        url: "mapbox://frajondouglas99.4ws99h0m",
        promoteId: "link_id",
      });
      map.addSource("2050", {
        type: "vector",
        // tiles: [
        //   "https://vector-tile-server.azurewebsites.net/tiles/noham_network_2050_tiles/{z}/{x}/{y}.pbf",
        //   // "http://localhost:5000/tiles/noham_network_2050_tiles/{z}/{x}/{y}.pbf",
        // ],
        url: "mapbox://frajondouglas99.39p1dukw",
        promoteId: "link_id",
      });

      setMap(map);
    });
    return () => map.remove();
  }, []);

  // Joins API data to vector layer. Runs on first component render and once the map is loaded. Note that the if statement prevents the
  // attempt to join non existent API data onto the vector layer.

  useEffect(() => {
    if (mapState) {
      if (typeof mapState.getLayer("id") !== "undefined") {
        mapState.removeLayer("id");
      }
      if (typeof mapState.getLayer("halo") !== "undefined") {
        mapState.removeLayer("halo");
      }
      mapState.addLayer({
        id: "halo",
        type: "line",
        source: year,
        "source-layer": sourceLayerLookup[year],
        paint: {
          "line-color": "black",
          "line-width": 2.5,
        },
        filter: ["==", "zone_conne", 0],
      });
      mapState.addLayer({
        id: "id",
        type: "line",
        source: year,
        "source-layer": sourceLayerLookup[year],
        paint: {
          "line-color": "red",
          "line-width": 2,
        },
        filter: ["==", "zone_conne", 0],
      });
    }
  }, [mapState, year]);

  useEffect(() => {
    if (mapState) {
      let metric = submittedFilterDefinition.metric;
      apiData.forEach((row) => {
        mapState.setFeatureState(
          {
            source: year,
            sourceLayer: sourceLayerLookup[year],
            id: row.link_id,
          },
          {
            metric: row[metric],
          }
        );
      });
      colourNetwork(
        colourPalette,
        mapState,
        timePeriod,
        metric,
        year,
        scenario,
        timePeriod2,
        year2,
        scenario2
      );
      mapState.on("mouseenter", "id", (e) => {
        mapState.getCanvas().style.cursor = "pointer";
        const coordinates = e.features[0].geometry.coordinates.slice();
        // const id = e.features[0].properties.id;
        const link_id = e.features[0].properties.link_id;

        const metricFilterArray = apiData.filter((item) => {
          return item.link_id === link_id;
        });
        if (metricFilterArray.length !== 0) {
          let metricName = submittedFilterDefinition.metric;
          // const idApi = metricFilterArray[0].id;
          const metricValue = metricFilterArray[0][metricName];
          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
          const popupNode = document.createElement("div");
          ReactDOM.render(
            <Popup
              link_id={link_id}
              metricName={metricName}
              metricValue={metricValue}
            />,
            popupNode
          );
          popUpRef.current
            .setLngLat(e.lngLat)
            .setDOMContent(popupNode)
            .addTo(mapState);
        }

        mapState.on("mouseleave", "id", () => {
          mapState.getCanvas().style.cursor = "";
          popUpRef.current.remove();
        });
      });
    }
  }, [mapState, apiData]);

  useEffect(() => {
    if (mapState) {
      mapState.flyTo({
        center: [zoomToLookup[panLocation][0], zoomToLookup[panLocation][1]],
        zoom: zoomToLookup[panLocation][2],
      });
    }
  }, [panLocation]);

  useEffect(() => {
    if (mapState) {
      if (filterBoolean) {
        mapState.setFilter("halo", ["==", "zone_conne", 0]);
      } else {
        mapState.setFilter("halo", null);
      }
    }
  }, [filterBoolean]);

  useEffect(() => {
    if (mapState) {
      colourNetwork(
        colourPalette,
        mapState,
        timePeriod,
        metric,
        year,
        scenario,
        timePeriod2,
        year2,
        scenario2
      );
    }
  }, [colourPalette]);

  return (
    <div>
      <div
        ref={mapContainer}
        className="MapContainer"
        style={{ width: "85vw", height: "96vh" }}
      />
      {/* <Button variant="contained" className="submitButton">
        <CSVLink data={apiData}>Download Selected</CSVLink>
      </Button> */}
      <Legend
        submittedFilterDefinition={submittedFilterDefinition}
        colourPalette={colourPalette}
      />
      <Button
        variant="contained"
        style={{ width: 250 }}
        className="filterButton"
        onClick={() => {
          if (filterBoolean) {
            setIsFilter(false);
          } else {
            setIsFilter(true);
          }
        }}
      >
        Toggle Zone Connectors
      </Button>
      <Button
        variant="contained"
        style={{ width: 250 }}
        className="colourToggleButton"
        onClick={() => {
          if (colourPalette[0] === "pink") {
            setColourPalette([
              "green",
              "#3FDD00",
              "#6CE001",
              "#9AE302",
              "#C7E603",
              "#F5E904",
              "#F0BE0C",
              "#EC9315",
              "#E7681D",
              "#E33D26",
              "#DF122F",
            ]);
          } else {
            setColourPalette([
              "pink",
              "#f7f4f9",
              "#e7e1ef",
              "#d4b9da",
              "#c994c7",
              "#df65b0",
              "#e7298a",
              "#ce1256",
              "#980043",
              "#67001f",
              "#1b0008",
            ]);
          }
        }}
      >
        Toggle Colour Palette
      </Button>
    </div>
  );
};

export default Map;
