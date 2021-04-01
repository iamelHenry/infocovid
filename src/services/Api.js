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

export const getNavigationRegions = () => {
  const url = `${API.URL}/region`;
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getNavigationLocations = (locationName) => {
  const url = `${API.URL}/region/${locationName}`;
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getLocations = () => {
  const url = `${API.URL}/location`;
  return getPromise(url);
}

const getPromise = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
}

export const getLocationById = (id) => {
  const url = `${API.URL}/location?code=${id}`;
  return getPromise(url);
}
