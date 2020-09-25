const ads = (state = "", action) => {
  switch (action.type) {
    case "GET_ADS_SUCCESS":
      return action.payload;
      break;
    case "GET_ADS_FAIL":
      return action.payload;
      break;
    default:
      return state;
      break;
  }
}

export default ads