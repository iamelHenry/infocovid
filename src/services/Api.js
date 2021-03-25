import { API } from '../config/AppConfig'; 

const getHomeReport = () => {
  const url = `${API.URL}/report`;
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getHomeReport;