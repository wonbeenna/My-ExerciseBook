import axios from 'axios';

export async function fetchData() {
  const url = '/data';
  const {data} = await axios.get(url);

  return data;
}
