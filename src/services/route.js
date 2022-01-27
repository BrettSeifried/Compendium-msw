// import { client } from './client';

export async function cardData() {
  const resp = await fetch('https://api.jikan.moe/v4/anime');
  const data = await resp.json();
  return data;
}
