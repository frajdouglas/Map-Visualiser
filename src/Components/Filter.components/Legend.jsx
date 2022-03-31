import React from "react";
import "./Legend.css";

const Legend = ({ submittedFilterDefinition }) => {
  let styleBox1 = {
    backgroundColor: "#4CC602",
    padding: "15px",
  };
  let styleBox2 = {
    backgroundColor: "#A4CF01",
    padding: "15px",
  };
  let styleBox3 = {
    backgroundColor: "#FDD900",
    padding: "15px",
  };
  let styleBox4 = {
    backgroundColor: "#FE7408",
    padding: "15px",
  };
  let styleBox5 = {
    backgroundColor: "#FF1010",
    padding: "15px",
  };

  let styleBoxGrey = {
    backgroundColor: "#f0f5f1",
    padding: "15px",
  };
  if (
    submittedFilterDefinition.metric === "netspd_kph" &&
    submittedFilterDefinition.timePeriod2
  ) {
    return (
      <div className="legend">
        <div className="legendTitle">Net Speed Difference (kph)</div>
        <div className="legendRow">
          <div className="legendValue">-20</div>
          <div style={styleBox1}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">-10</div>
          <div style={styleBox2}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">0</div>
          <div
            style={styleBoxGrey}
          ></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">10</div>
          <div style={styleBox4}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">20</div>
          <div style={styleBox5}></div>
        </div>
      </div>
    );
  } else if (
    submittedFilterDefinition.metric !== "netspd_kph" &&
    submittedFilterDefinition.timePeriod2
  ) {
    return (
      <div className="legend">
        <div className="legendTitle">
          {submittedFilterDefinition.metric} Difference{" "}
        </div>
        <div className="legendRow">
          <div className="legendValue">-1000</div>
          <div style={styleBox1}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">-500</div>
          <div style={styleBox2}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">0</div>
          <div style={styleBoxGrey}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">500</div>
          <div style={styleBox4}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">1000</div>
          <div style={styleBox5}></div>
        </div>
      </div>
    );
  } else if (submittedFilterDefinition.metric === "total_flow") {
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
  } else if (submittedFilterDefinition.metric === "car_eb") {
    return (
      <div className="legend">
        <div className="legendTitle">Car Eb</div>
        <div className="legendRow">
          <div className="legendValue">0-250</div>
          <div style={styleBox1}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">250-760</div>
          <div style={styleBox2}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">760-1600</div>
          <div style={styleBox3}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">1600-3000</div>
          <div style={styleBox4}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">3000-8200</div>
          <div style={styleBox5}></div>
        </div>
      </div>
    );
  } else if (submittedFilterDefinition.metric === "car_comm") {
    return (
      <div className="legend">
        <div className="legendTitle">Car Comm</div>
        <div className="legendRow">
          <div className="legendValue">0-600</div>
          <div style={styleBox1}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">600-2000</div>
          <div style={styleBox2}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">2000-4580</div>
          <div style={styleBox3}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">4580-12000</div>
          <div style={styleBox4}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">12000-24000</div>
          <div style={styleBox5}></div>
        </div>
      </div>
    );
  } else if (submittedFilterDefinition.metric === "car_other") {
    return (
      <div className="legend">
        <div className="legendTitle">Car Other</div>
        <div className="legendRow">
          <div className="legendValue">0-500</div>
          <div style={styleBox1}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">500-1600</div>
          <div style={styleBox2}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">1600-4400</div>
          <div style={styleBox3}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">4400-10500</div>
          <div style={styleBox4}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">10500-20000</div>
          <div style={styleBox5}></div>
        </div>
      </div>
    );
  } else if (submittedFilterDefinition.metric === "lgv_flow") {
    return (
      <div className="legend">
        <div className="legendTitle">LGV Flow</div>
        <div className="legendRow">
          <div className="legendValue">0-70</div>
          <div style={styleBox1}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">70-210</div>
          <div style={styleBox2}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">210-480</div>
          <div style={styleBox3}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">480-900</div>
          <div style={styleBox4}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">900-1800</div>
          <div style={styleBox5}></div>
        </div>
      </div>
    );
  } else if (submittedFilterDefinition.metric === "hgv_flow") {
    return (
      <div className="legend">
        <div className="legendTitle">HGV Flow</div>
        <div className="legendRow">
          <div className="legendValue">0-125</div>
          <div style={styleBox1}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">125-415</div>
          <div style={styleBox2}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">415-950</div>
          <div style={styleBox3}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">950-1800</div>
          <div style={styleBox4}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">1800-3120</div>
          <div style={styleBox5}></div>
        </div>
      </div>
    );
  } else if (submittedFilterDefinition.metric === "link_voc") {
    return (
      <div className="legend">
        <div className="legendTitle">Link Voc</div>
        <div className="legendRow">
          <div className="legendValue">0-13</div>
          <div style={styleBox1}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">13-35</div>
          <div style={styleBox2}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">35-58</div>
          <div style={styleBox3}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">58-86</div>
          <div style={styleBox4}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">86-205</div>
          <div style={styleBox5}></div>
        </div>
      </div>
    );
  }
};

export default Legend;
