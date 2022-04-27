import axios from "axios";

const postgresApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // baseURL: "http://localhost:9090/api/noham",
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_API_ACCESS_TOKEN,
  },
});

export const getData = (model, timePeriod, metric, year, scenario) => {
  return postgresApi.get('/', { params: { model : model, timePeriod : timePeriod, metric : metric, year : year, scenario : scenario }}).then((res) => {
    return res.data;
  });
};

export const getDifference = (model, timePeriod, metric, year, scenario, model2, timePeriod2, year2, scenario2) => {
  return postgresApi.get('/difference', { params: { model : model, timePeriod : timePeriod, metric : metric, year : year, scenario: scenario, model2 : model2, timePeriod2 : timePeriod2, year2 : year2, scenario2 : scenario2 }}).then((res) => {
    return res.data;
  });
};

export const getTablesSummary = () => {
  return postgresApi.get('/summary').then((res) => {
    return res.data;
  });
};
