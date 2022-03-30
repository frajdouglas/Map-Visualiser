import axios from 'axios';

const postgresApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // baseURL: 'http://localhost:9090/api/noham',
  headers: {'Authorization': 'Bearer '+ process.env.REACT_APP_API_ACCESS_TOKEN}
});

export const getData = (timePeriod, metric, year, scenario) => {
  return postgresApi.get('/', { params: { timePeriod : timePeriod, metric : metric, year : year, scenario : scenario }}).then((res) => {
    console.log(res)
    return res.data;
  });
};

export const getDifference = (timePeriod, metric, year, scenario, timePeriod2, year2, scenario2) => {
  return postgresApi.get('/difference', { params: { timePeriod : timePeriod, metric : metric, year : year, scenario: scenario, timePeriod2 : timePeriod2, year2 : year2, scenario2 : scenario2 }}).then((res) => {
    console.log(res.data)
    return res.data;
  });
};