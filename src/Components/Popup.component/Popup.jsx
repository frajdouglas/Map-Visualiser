
import './Popup.css'
const Popup = ({ link_id, metricName, metricValue  }) => {
  return (
    <div className="popup">
      <div className="metric-row">
      <h4 className="row-title">Link_id:</h4>
      <div className="row-value">{link_id}</div>
      </div>
      <div className="metric-row">
      <h4 className="row-title">{metricName}:</h4>
      <div className="row-value">{metricValue}</div>
      </div>
    </div>
  )
 }

  export default Popup