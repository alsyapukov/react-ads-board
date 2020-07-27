import HTTP from "../http-common";

export default id => {
  return HTTP.get(`/ads/${id}`, {
    // params: {
    //   id
    // },
    cache: false
  });
}
  
