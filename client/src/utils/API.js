import axios from "axios";

const dealKey = "dfff166e5f83e467709331ec5908eb43fcf348ab";

const dealQueryBase = "https://api.isthereanydeal.com/v02/game/plain/?key=" + dealKey; 

const walmartKey = "zzjd8dnn2xptv4j8nbj8p9mu";

const walmartQueryBase = "https://api.walmartlabs.com/v1/search/?query=";

const client = igdb("fa8bc67db1518b344b54f3cb76bc4e66")

let searchString;

export default {

  dealSearch: (params) => {
  	const dealQuery = dealQueryBase + "&title=" + searchString;

    return axios.get(dealQuery);
  },
};

export default {
    
    walmartSearch: (params) => {
        const walmartQuery = walmartQueryBase + searchString + "&apiKey=" + walmartKey + "&format=json";

    return axios.get(walmartQuery);
    },
 };

 export default {

    igdbSearch: () => {
      client.games({
          search: searchString,
          fields: ["name", "cover", "release_dates.date", "summary", "websites"],
          limit: 1
      }).then(response => {
        console.log(JSON.stringify(response.body, null));
      }).catch(error => {
          throw error;
    });
  }
};