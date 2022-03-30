import React from "react";
import "./Legend.css";

const Legend = ({ submittedFilterDefinition }) => {
    let styleBox1 = {
    backgroundColor: "#FF1010",
    padding: "15px",
  };
  let styleBox2 = {
    backgroundColor: "#FE7408",
    padding: "15px",
  };
  let styleBox3 = {
    backgroundColor: "#FDD900",
    padding: "15px",
  };
  let styleBox4 = {
    backgroundColor: "#A4CF01",
    padding: "15px",
  };
  let styleBox5 = {
    backgroundColor: "#4CC602",
    padding: "15px",
  };
  if (submittedFilterDefinition.metric === "total_flow") {
    return (
      <div className="legend">
        <div className="legendTitle">Total Flow</div>
        <div className="legendRow">
          <div className="legendValue">0-900</div>
          <div style={styleBox1}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">900-2800</div>
          <div style={styleBox2}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">2800-6400</div>
          <div style={styleBox3}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">6400-16000</div>
          <div style={styleBox4}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">16000-30500</div>
          <div style={styleBox5}></div>
        </div>
      </div>
    );
  } else if (submittedFilterDefinition.metric === "netspd_kph") {
    return (
      <div className="legend">
        <div className="legendTitle">Net Speed (kph)</div>
        <div className="legendRow">
          <div className="legendValue">0-30</div>
          <div style={styleBox5}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">30-55</div>
          <div style={styleBox4}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">55-82</div>
          <div style={styleBox3}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">82-113</div>
          <div style={styleBox2}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">113-999</div>
          <div style={styleBox1}></div>
        </div>
      </div>
    );
  } else if (submittedFilterDefinition.metric === "netspd_kph") {
    return (
      <div className="legend">
        <div className="legendTitle">Net Speed (kph)</div>
        <div className="legendRow">
          <div className="legendValue">0</div>
          <div style={{ backgroundColor: "#FF160C", padding: "15px" }}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">50</div>
          <div style={{ backgroundColor: "#FFFF00", padding: "15px" }}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">100</div>
          <div style={{ backgroundColor: "#39FF14", padding: "15px" }}></div>
        </div>
      </div>
    );
  } else if (submittedFilterDefinition.metric === "netspd_kph") {
    return (
      <div className="legend">
        <div className="legendTitle">Net Speed (kph)</div>
        <div className="legendRow">
          <div className="legendValue">0</div>
          <div style={{ backgroundColor: "#FF160C", padding: "15px" }}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">50</div>
          <div style={{ backgroundColor: "#FFFF00", padding: "15px" }}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">100</div>
          <div style={{ backgroundColor: "#39FF14", padding: "15px" }}></div>
        </div>
      </div>
    );
  } else if (submittedFilterDefinition.metric === "netspd_kph") {
    return (
      <div className="legend">
        <div className="legendTitle">Net Speed (kph)</div>
        <div className="legendRow">
          <div className="legendValue">0</div>
          <div style={{ backgroundColor: "#FF160C", padding: "15px" }}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">50</div>
          <div style={{ backgroundColor: "#FFFF00", padding: "15px" }}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">100</div>
          <div style={{ backgroundColor: "#39FF14", padding: "15px" }}></div>
        </div>
      </div>
    );
  } else if (submittedFilterDefinition.metric === "netspd_kph") {
    return (
      <div className="legend">
        <div className="legendTitle">Net Speed (kph)</div>
        <div className="legendRow">
          <div className="legendValue">0</div>
          <div style={{ backgroundColor: "#FF160C", padding: "15px" }}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">50</div>
          <div style={{ backgroundColor: "#FFFF00", padding: "15px" }}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">100</div>
          <div style={{ backgroundColor: "#39FF14", padding: "15px" }}></div>
        </div>
      </div>
    );
  } else if (submittedFilterDefinition.metric === "netspd_kph") {
    return (
      <div className="legend">
        <div className="legendTitle">Net Speed (kph)</div>
        <div className="legendRow">
          <div className="legendValue">0</div>
          <div style={{ backgroundColor: "#FF160C", padding: "15px" }}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">50</div>
          <div style={{ backgroundColor: "#FFFF00", padding: "15px" }}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">100</div>
          <div style={{ backgroundColor: "#39FF14", padding: "15px" }}></div>
        </div>
      </div>
    );
  } else if (submittedFilterDefinition.metric === "netspd_kph") {
    return (
      <div className="legend">
        <div className="legendTitle">Net Speed (kph)</div>
        <div className="legendRow">
          <div className="legendValue">0</div>
          <div style={{ backgroundColor: "#FF160C", padding: "15px" }}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">50</div>
          <div style={{ backgroundColor: "#FFFF00", padding: "15px" }}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">100</div>
          <div style={{ backgroundColor: "#39FF14", padding: "15px" }}></div>
        </div>
      </div>
    );
  } else if (submittedFilterDefinition.metric === "netspd_kph") {
    return (
      <div className="legend">
        <div className="legendTitle">Net Speed (kph)</div>
        <div className="legendRow">
          <div className="legendValue">0</div>
          <div style={{ backgroundColor: "#FF160C", padding: "15px" }}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">50</div>
          <div style={{ backgroundColor: "#FFFF00", padding: "15px" }}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">100</div>
          <div style={{ backgroundColor: "#39FF14", padding: "15px" }}></div>
        </div>
      </div>
    );
  } else if (submittedFilterDefinition.metric === "netspd_kph") {
    return (
      <div className="legend">
        <div className="legendTitle">Net Speed (kph)</div>
        <div className="legendRow">
          <div className="legendValue">0</div>
          <div style={{ backgroundColor: "#FF160C", padding: "15px" }}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">50</div>
          <div style={{ backgroundColor: "#FFFF00", padding: "15px" }}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">100</div>
          <div style={{ backgroundColor: "#39FF14", padding: "15px" }}></div>
        </div>
      </div>
    );
  }
};

export default Legend;
