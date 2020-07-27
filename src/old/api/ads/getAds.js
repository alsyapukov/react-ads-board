import HTTP from "../http-common";

export default () => {
  return HTTP.get(`/ads`, {
    cache: false
  });
}
  
