// import { client } from './client';

export async function cardData() {
  const resp = await fetch('https://dog.ceo/api/breeds/image/random/10');
  const data = await resp.json();
  return data;
}
