const viewPort = (state = "desktop", action) => {
  switch (action.type) {
    case "VIEWPORT_INIT":
      return action.payload;
      break;
    default:
      return state;
      break;
  }
}

export default viewPort