import HTTP from "../http-common";

export default payload => {

  return HTTP.post("users/auth", payload, {
    headers: {
    },
    cache: false
  });
};
  
