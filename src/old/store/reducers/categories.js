const categories = (state = "", action) => {
  switch (action.type) {
    case "GET_CATEGORIES_SUCCESS":
      return action.payload;
      break;
    case "GET_CATEGORIES_FAIL":
      return action.payload;
      break;
    default:
      return state;
      break;
  }
}

export default categories