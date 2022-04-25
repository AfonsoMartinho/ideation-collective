import axios from 'axios';
const fetchFromCMS = async (path) => {
  const url = `https://floating-dawn-20097.herokuapp.com/api/${path}?populate=*`; 
  const res = await axios.get(url);
  return res.data;
};
export default fetchFromCMS;