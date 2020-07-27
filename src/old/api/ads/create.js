import HTTP from "../http-common";

export default payload => {
  let objectData = new FormData();
  
  Object.keys(payload).map(item => {
    if(item !== 'images') {
      objectData.append(`${item}`, payload[item]);
    }
  })
  
  payload.images.map((img, i) => {
    objectData.append(`media`, img || "");
  })
  // objectData.append(`title`, payload.title);
  // objectData.append(`miniDescription`, payload.miniDescription);
  // objectData.append(`description`, payload.description);

  // console.log(payload.images);

  return HTTP.post("ads", objectData, {
    headers: {
    },
    cache: false
  });
};
  
