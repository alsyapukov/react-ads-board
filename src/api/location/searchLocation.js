import HTTP from "../http-common";

export default query => {
  return HTTP.get(`/location`, {
    params: {
      query
    },
    cache: false
  });
}
  
