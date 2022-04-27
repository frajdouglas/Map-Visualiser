import Map from "../Map.component/Map";
import "./Filter.css";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { checkEquality } from "../../Utils/objectEqualityChecker";
import { getDifference, getTablesSummary } from "../../Utils/api.js";
import ReactLoading from "react-loading";

const Difference = () => {
  const [filterDefinition, setFilterDefinition] = useState({
    model: "v1",
    timePeriod: "am",
    metric: "total_flow",
    year: "2018",
    scenario: "base",
    model2: "v1",
    timePeriod2: "pm",
    year2: "2018",
    scenario2: "base",
  });
  const [submittedFilterDefinition, setSubmittedFilterDefinition] = useState({
    model: "v1",
    timePeriod: "am",
    metric: "total_flow",
    year: "2018",
    scenario: "base",
    model2: "v1",
    timePeriod2: "pm",
    year2: "2018",
    scenario2: "base",
  });

  const [apiData, setApiData] = useState([{ id: 41969, total_flow: 100 }]);
  const [loading, setLoading] = useState(false);
  const [dropdownOptions, setDropdownOptions] = useState({
    2018: { base: ["v1"] },
    2050: { sc01_jam: ["v1"], sc02_pp: ["v1"], sc03_dd: ["v1", "v2"] },
  });
  const [panLocation, setPanLocation] = useState("");

  const zoomToLookup = {
    TN: [-1.826, 54.306, 8],
    M60: [-2.246, 53.473, 11],
  };

  const scenarioNameLookup = {
    sc03_dd: 'Digitally Distributed',
    sc01_jam: 'Just About Managing',
    sc02_pp: 'Prioritised Places',
    sc04_uzc: 'Urban Zero Carbon'
  }

  let { model, timePeriod, metric, year, scenario, model2, timePeriod2, year2, scenario2 } =
    submittedFilterDefinition;

  const handleSubmit = () => {
    setSubmittedFilterDefinition(filterDefinition);
  };
  useEffect(() => {
    getTablesSummary().then((dataFromApi) => {
      setDropdownOptions(dataFromApi.data);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getDifference(
      model,
      timePeriod,
      metric,
      year,
      scenario,
      model2,
      timePeriod2,
      year2,
      scenario2
    ).then((dataFromApi) => {
      setLoading(false);
      setApiData(dataFromApi.data);
    });
  }, [submittedFilterDefinition]);

  return (
    <div className="filters">
      <div className="dropdown">
        <FormControl style={{ width: 250 }}>
          <InputLabel id="year-filter-select-label">Year</InputLabel>
          <Select
            labelId="year-filter-dropdown"
            id="year-filter-dropdown"
            value={filterDefinition.year}
            label="year"
            onChange={(event) => {
              let copyFilterDefinition = { ...filterDefinition };
              copyFilterDefinition.year = event.target.value;
              if (copyFilterDefinition.year === "2018") {
                copyFilterDefinition.scenario = "base";
              } else {
                copyFilterDefinition.scenario = "sc01_jam";
              }
              setFilterDefinition(copyFilterDefinition);
            }}
            autoWidth
          >
            {Object.keys(dropdownOptions).map((year) => {
              return <MenuItem value={year}>{year}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      <div className="dropdown">
        <FormControl style={{ width: 250 }}>
          <InputLabel id="time-period-filter-select-label">
            Time Period
          </InputLabel>
          <Select
            labelId="time-period-filter-dropdown"
            id="time-period-filter-dropdown"
            value={filterDefinition.timePeriod}
            label="timePeriod"
            onChange={(event) => {
              let copyFilterDefinition = { ...filterDefinition };
              copyFilterDefinition.timePeriod = event.target.value;
              setFilterDefinition(copyFilterDefinition);
            }}
            autoWidth
          >
            <MenuItem value={"am"}>AM</MenuItem>
            <MenuItem value={"ip"}>IP</MenuItem>
            <MenuItem value={"pm"}>PM</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="dropdown">
        <FormControl style={{ width: 250 }}>
          <InputLabel id="metric-filter-select-label">Metric</InputLabel>
          <Select
            labelId="metric-filter-dropdown"
            id="metric-filter-dropdown"
            value={filterDefinition.metric}
            label="metric"
            onChange={(event) => {
              let copyFilterDefinition = { ...filterDefinition };
              copyFilterDefinition.metric = event.target.value;
              setFilterDefinition(copyFilterDefinition);
            }}
            autoWidth
          >
            <MenuItem value={"total_flow"}>Total Flow</MenuItem>
            <MenuItem value={"netspd_kph"}>Net Speed (kph)</MenuItem>
            <MenuItem value={"car_eb"}>car_eb</MenuItem>
            <MenuItem value={"car_comm"}>car_comm</MenuItem>
            <MenuItem value={"car_other"}>car_other</MenuItem>
            <MenuItem value={"lgv_flow"}>lgv_flow</MenuItem>
            <MenuItem value={"hgv_flow"}>hgv_flow</MenuItem>
            <MenuItem value={"link_voc"}>link_voc</MenuItem>
          </Select>
        </FormControl>
      </div>
      {filterDefinition.year !== "2018" && (
        <div className="dropdown">
          <FormControl style={{ width: 250 }}>
            <InputLabel id="scenario-filter-select-label">Scenario</InputLabel>
            <Select
              labelId="scenario-filter-dropdown"
              id="scenario-filter-dropdown"
              value={filterDefinition.scenario}
              label="scenario"
              onChange={(event) => {
                let copyFilterDefinition = { ...filterDefinition };
                copyFilterDefinition.scenario = event.target.value;
                setFilterDefinition(copyFilterDefinition);
              }}
              autoWidth
            >
             {Object.keys(dropdownOptions[filterDefinition.year]).map(
                (scenario) => {
                  return <MenuItem value={scenario}>{scenarioNameLookup[scenario]}</MenuItem>;
                }
              )}
            </Select>
          </FormControl>
        </div>
      )}
            <div className="dropdown">
        <FormControl style={{ width: 250 }}>
          <InputLabel id="model-filter-select-label">Model Run</InputLabel>
          <Select
            labelId="model-filter-dropdown"
            id="model-filter-dropdown"
            value={filterDefinition.model}
            label="model"
            onChange={(event) => {
              let copyFilterDefinition = { ...filterDefinition };
              copyFilterDefinition.model = event.target.value;
              setFilterDefinition(copyFilterDefinition);
            }}
            autoWidth
          >
            {dropdownOptions[filterDefinition.year][filterDefinition.scenario].map((version) => {
              return <MenuItem value={version}>{version}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      <div className="dropdown">
        <FormControl style={{ width: 250 }}>
          <InputLabel id="year2-filter-select-label">
            Comparison Year
          </InputLabel>
          <Select
            labelId="year2-filter-dropdown"
            id="year2-filter-dropdown"
            value={filterDefinition.year2}
            label="year2"
            onChange={(event) => {
              let copyFilterDefinition = { ...filterDefinition };
              copyFilterDefinition.year2 = event.target.value;
              if (copyFilterDefinition.year2 === "2018") {
                copyFilterDefinition.scenario2 = "base";
              } else {
                copyFilterDefinition.scenario2 = "sc01_jam";
              }
              setFilterDefinition(copyFilterDefinition);
            }}
            autoWidth
          >
            {Object.keys(dropdownOptions).map((year) => {
              return <MenuItem value={year}>{year}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      <div className="dropdown">
        <FormControl style={{ width: 250 }}>
          <InputLabel id="time-period2-filter-select-label">
            Comparison Time Period
          </InputLabel>
          <Select
            labelId="time-period2-filter-dropdown"
            id="time-period2-filter-dropdown"
            value={filterDefinition.timePeriod2}
            label="timePeriod2"
            onChange={(event) => {
              let copyFilterDefinition = { ...filterDefinition };
              copyFilterDefinition.timePeriod2 = event.target.value;
              setFilterDefinition(copyFilterDefinition);
            }}
            autoWidth
          >
            <MenuItem value={"am"}>AM</MenuItem>
            <MenuItem value={"ip"}>IP</MenuItem>
            <MenuItem value={"pm"}>PM</MenuItem>
          </Select>
        </FormControl>
      </div>
      {filterDefinition.year2 !== "2018" && (
        <div className="dropdown">
          <FormControl style={{ width: 250 }}>
            <InputLabel id="scenario2-filter-select-label">
              Comparison Scenario
            </InputLabel>
            <Select
              labelId="scenario2-filter-dropdown"
              id="scenario2-filter-dropdown"
              value={filterDefinition.scenario2}
              label="scenario2"
              onChange={(event) => {
                let copyFilterDefinition = { ...filterDefinition };
                copyFilterDefinition.scenario2 = event.target.value;
                setFilterDefinition(copyFilterDefinition);
              }}
              autoWidth
            >
             {Object.keys(dropdownOptions[filterDefinition.year2]).map(
                (scenario2) => {
                  return <MenuItem value={scenario2}>{scenarioNameLookup[scenario2]}</MenuItem>;
                }
              )}
            </Select>
          </FormControl>
        </div>
      )}
      <div className="dropdown">
        <FormControl style={{ width: 250 }}>
          <InputLabel id="model2-filter-select-label">Comparison Model Run</InputLabel>
          <Select
            labelId="model2-filter-dropdown"
            id="model2-filter-dropdown"
            value={filterDefinition.model2}
            label="model2"
            onChange={(event) => {
              let copyFilterDefinition = { ...filterDefinition };
              copyFilterDefinition.model2 = event.target.value;
              setFilterDefinition(copyFilterDefinition);
            }}
            autoWidth
          >
            {dropdownOptions[filterDefinition.year][filterDefinition.scenario].map((version) => {
              return <MenuItem value={version}>{version}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      {checkEquality(submittedFilterDefinition, filterDefinition) ? (
        <Button disabled>Submit</Button>
      ) : (
        <Button
          variant="contained"
          className="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      )}
      {loading === true && (
        <div className="loading">
          <ReactLoading
            type={"spin"}
            color={"#00dec6"}
            height={50}
            width={50}
          />{" "}
        </div>
      )}
      <div className="dropdown">
        <FormControl style={{ width: 250 }}>
          <InputLabel id="zoomTo-filter-select-label">Zoom To</InputLabel>
          <Select
            labelId="zoomTo-filter-dropdown"
            id="zoomTo-filter-dropdown"
            value={panLocation}
            label="zoomTo"
            onChange={(event) => {
              setPanLocation(event.target.value);
            }}
            autoWidth
          >
            <MenuItem value={"TN"}>The North</MenuItem>
            <MenuItem value={"M60"}>M60</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="map">
        <Map
          apiData={apiData}
          submittedFilterDefinition={submittedFilterDefinition}
          panLocation={panLocation}
          zoomToLookup={zoomToLookup}
        />
      </div>
    </div>
  );
};

export default Difference;
