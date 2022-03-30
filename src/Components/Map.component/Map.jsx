import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import maplibregl from 'maplibre-gl';
import "maplibre-gl/dist/maplibre-gl.css";


import Popup from "../Popup.component/Popup";
import { joinAPIData } from "../../Utils/mapUtils.js";

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

const Map = ({
  apiData,
  submittedFilterDefinition,
  panLocation,
  zoomToLookup,
}) => {
  let { timePeriod, metric, year, scenario, timePeriod2, year2, scenario2 } =
    submittedFilterDefinition;
  const popUpRef = useRef(new maplibregl.Popup({ offset: 20 }));
  const [mapState, setMap] = useState(null);
  const mapContainer = useRef(null);
  // Add vector layer lookup into here once uploaded and try switching between years.
  let sourceLayerLookup = {
    2018: "refCase_2018_network_offset_30",
    2050: "refCase_2050_network_offset_30_new",
  };

  console.log("MAP COMPONENT RENDERED, MapState is :", mapState);
  console.log(apiData);
  // Map creation, runs on first component render only. Note that
  // the map.on(load) listener is async hence the next use effect will be triggered before the code in the on load function is triggered.
  // this is why we needed a separate useEffect for joining the apidata to the vector layer.
  // We add all the required sources here and add a dummy "id" layer to instantly removed in next useEffect and replace with the required layer.
  useEffect(() => {
    console.log("MapState is :", mapState);
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "http://localhost:5000/tileserver/style.json",
      center: [-1.826, 54.306],
      zoom: 7,
    });
    map.on("load", () => {
      map.addControl(new maplibregl.FullscreenControl(), "bottom-right");
      map.addSource("2018", {
        type: "vector",
        tiles: [
          "http://localhost:5000/tileserver/noham_network_2018_tiles/tiles/{z}/{x}/{y}.pbf",
        ],
        promoteId: "id",
      });
      map.addSource("2050", {
        type: "vector",
        tiles: [
          "http://localhost:5000/tileserver/noham_network_2050_tiles/tiles/{z}/{x}/{y}.pbf",
        ],
        promoteId: "id",
      });
      
      console.log("MapState is :", mapState);
      setMap(map);
    });
    return () => map.remove();
  }, []);

  // Joins API data to vector layer. Runs on first component render and once the map is loaded. Note that the if statement prevents the
  // attempt to join non existent API data onto the vector layer.

  useEffect(() => {
    if (mapState) {
      console.log("Map source MapState is :", mapState);

      if (typeof mapState.getLayer("id") !== "undefined") {
        mapState.removeLayer("id");
      }

      mapState.addLayer({
        id: "id",
        type: "line",
        source: year,
        "source-layer": sourceLayerLookup[year],
        paint: {
          "line-color": "red",
          "line-width": 2
        },
      });
    }
  }, [mapState, year]);

  useEffect(() => {
    console.log("FEATURE STATE SETTING MapState is :", mapState);
    if (mapState) {
      let metric = submittedFilterDefinition.metric;
      apiData.forEach((row) => {
        mapState.setFeatureState(
          {
            source: year,
            sourceLayer: sourceLayerLookup[year],
            id: row.id,
          },
          {
            metric: row[metric],
          }
        );
      });
      joinAPIData(
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
        const id = e.features[0].properties.id;
        const link_id = e.features[0].properties.link_id;

        const metricFilterArray = apiData.filter((item) => {
          return Number(item.id) === id;
        });
        if (metricFilterArray.length !== 0) {
          let metricName = submittedFilterDefinition.metric;
          const idApi = metricFilterArray[0].id;
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
  console.log(zoomToLookup);
  useEffect(() => {
    if (mapState) {
      mapState.flyTo({
        center: [zoomToLookup[panLocation][0], zoomToLookup[panLocation][1]],
        zoom: zoomToLookup[panLocation][2],
      });
    }
  }, [panLocation]);

  return (
    <div>
      <div
        ref={mapContainer}
        className="MapContainer"
        style={{ width: "85vw", height: "100vh" }}
      />
    </div>
  );
};

export default Map;
