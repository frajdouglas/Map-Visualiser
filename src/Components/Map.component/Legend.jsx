import React from "react";
import "./Legend.css";

const Legend = ({ submittedFilterDefinition, paintProperty }) => {

  console.log(paintProperty)
  let styleBox1 = {
    backgroundColor: "#f7f4f9",
    padding: "15px",
  };
  let styleBox2 = {
    backgroundColor: "#e7e1ef",
    padding: "15px",
  };
  let styleBox3 = {
    backgroundColor: "#d4b9da",
    padding: "15px",
  };
  let styleBox4 = {
    backgroundColor: "#c994c7",
    padding: "15px",
  };
  let styleBox5 = {
    backgroundColor: "#df65b0",
    padding: "15px",
  };

  let styleBox6 = {
    backgroundColor: "#e7298a",
    padding: "15px",
  };

  let styleBox7 = {
    backgroundColor: "#ce1256",
    padding: "15px",
  };

  let styleBox8 = {
    backgroundColor: "#980043",
    padding: "15px",
  };

  let styleBox9 = {
    backgroundColor: "#67001f",
    padding: "15px",
  };

  let styleBox10 = {
    backgroundColor: "#1b0008",
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
          <div className="legendValue">0-365</div>
          <div style={styleBox1}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">365-935</div>
          <div style={styleBox2}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">935-1810</div>
          <div style={styleBox3}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">1810-3100</div>
          <div style={styleBox4}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">3100-4715</div>
          <div style={styleBox5}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">4715-6950</div>
          <div style={styleBox6}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">6950-10275</div>
          <div style={styleBox7}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">10275-15345</div>
          <div style={styleBox8}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">15345-21385</div>
          <div style={styleBox9}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">21385-31045</div>
          <div style={styleBox10}></div>
        </div>
      </div>
    );
  } else if (submittedFilterDefinition.metric === "netspd_kph") {
    return (
      <div className="legend">
        <div className="legendTitle">Net Speed (kph)</div>
        <div className="legendRow">
          <div className="legendValue">0-15</div>
          <div style={styleBox1}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">15-26</div>
          <div style={styleBox2}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">26-37</div>
          <div style={styleBox3}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">37-46</div>
          <div style={styleBox4}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">46-57</div>
          <div style={styleBox5}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">57-70</div>
          <div style={styleBox6}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">70-84</div>
          <div style={styleBox7}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">84-99</div>
          <div style={styleBox8}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">99-115</div>
          <div style={styleBox9}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">115+</div>
          <div style={styleBox10}></div>
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
