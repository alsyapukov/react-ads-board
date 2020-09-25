const subcategories = (state = "", action) => {
  switch (action.type) {
    case "GET_SUBCATEGORIES_SUCCESS":
      return action.payload;
      break;
    case "GET_SUBCATEGORIES_FAIL":
      return action.payload;
      break;
    default:
      return state;
      break;
  }
}

export default subcategories