import React from "react";
import "./Legend.css";

const Legend = ({ submittedFilterDefinition, colourPalette }) => {
  console.log(colourPalette);
  let styleBox1 = {
    backgroundColor: colourPalette[1],
    padding: "15px",
  };
  let styleBox2 = {
    backgroundColor: colourPalette[2],
    padding: "15px",
  };
  let styleBox3 = {
    backgroundColor: colourPalette[3],
    padding: "15px",
  };
  let styleBox4 = {
    backgroundColor: colourPalette[4],
    padding: "15px",
  };
  let styleBox5 = {
    backgroundColor: colourPalette[5],
    padding: "15px",
  };

  let styleBox6 = {
    backgroundColor: colourPalette[6],
    padding: "15px",
  };

  let styleBox7 = {
    backgroundColor: colourPalette[7],
    padding: "15px",
  };

  let styleBox8 = {
    backgroundColor: colourPalette[8],
    padding: "15px",
  };

  let styleBox9 = {
    backgroundColor: colourPalette[9],
    padding: "15px",
  };

  let styleBox10 = {
    backgroundColor: colourPalette[10],
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
          <div className="legendValue">-50</div>
          <div style={styleBox1}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">-35 to -15</div>
          <div style={styleBox2}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">-35 to -15</div>
          <div style={styleBox3}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">-15 to -5</div>
          <div style={styleBox4}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">-5 to 0</div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              padding: "15px",
            }}
          ></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">0 to 5</div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              padding: "15px",
            }}
          ></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">5 to 15</div>
          <div style={styleBox7}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">15 to 35</div>
          <div style={styleBox8}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">35 to 50</div>
          <div style={styleBox9}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">50+</div>
          <div style={styleBox10}></div>
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
          <div className="legendValue">-10000</div>
          <div style={styleBox1}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">-10000 to -5000</div>
          <div style={styleBox2}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">-5000 to -1000</div>
          <div style={styleBox3}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">-1000 to -100</div>
          <div style={styleBox4}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">-100 to 0</div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              padding: "15px",
            }}
          ></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">0 to 100</div>
          <div
            style={{
              backgroundColor: "#FFFFFF",
              padding: "15px",
            }}
          ></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">100 to 1000</div>
          <div style={styleBox7}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">1000 to 5000</div>
          <div style={styleBox8}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">5000 to 10000</div>
          <div style={styleBox9}></div>
        </div>
        <div className="legendRow">
          <div className="legendValue">10000+</div>
          <div style={styleBox10}></div>
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
