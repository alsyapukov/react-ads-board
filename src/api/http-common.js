import axios from "axios";

const API = 'http://localhost:5001';

let cookies = document.cookie.split('; ')

if(typeof cookies === 'string') {
  cookies = [...cookies];
}

cookies = cookies.reduce((acc, item) => {
  const cookie = item.split('=')
  acc[cookie[0]] = cookie[1];
  return acc
}, {})

export default axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
    "Authorization": cookies.token ? `Bearer ${cookies.token}` : false
  },
});
