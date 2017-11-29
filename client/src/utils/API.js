import axios from "axios";
import $ from "jquery";

const dealKey = "dfff166e5f83e467709331ec5908eb43fcf348ab";

const dealQueryBase = "https://api.isthereanydeal.com/v01/game/prices/us/?key=" + dealKey;

const walmartKey = "zzjd8dnn2xptv4j8nbj8p9mu";

const walmartQueryBase = "https://api.walmartlabs.com/v1/search/?query=";


export default {

  dealSearch: (params) => {

    let spaceless = params.searchString.replace(/\s/g, '+');

    const dealQuery = `${dealQueryBase}&plains=${spaceless}&country=US`;
 
    return (
      $.ajax({
        url: dealQuery,
        dataType: "jsonp"
      })
    );
  
  },

  walmartSearch: (params) => {
    const walmartQuery = `${walmartQueryBase}${params.searchString}&apiKey=${walmartKey}&format=json`;

    return (
      $.ajax({
        url: walmartQuery,
        dataType: "jsonp"
      })
    );
  },

  ignTopHeadlines: () => {
    const ignQuery = "https://newsapi.org/v2/top-headlines?sources=ign&apiKey=13800756217a4be2bfd4e551654fb12a";
    
    return (
      $.ajax ({
        url: ignQuery,
        dataType: "json"
      })
    );
  },

  polygonTopHeadlines: () => {
    const polygonQuery ="https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=13800756217a4be2bfd4e551654fb12a";

    return (
      $.ajax ({
        url: polygonQuery,
        dataType: "json"
      })
    );
  }
};







