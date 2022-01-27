import { render, screen } from '@testing-library/react';
import DisplayData from '../component/card';
import Home from './home';

const user = {
  mal_id: 1,
  url: 'https://myanimelist.net/anime/1/Cowboy_Bebop',
  images: {
    jpg: {
      image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
      small_image_url: 'https://cdn.myanimelist.net/images/anime/4/19644t.jpg',
      large_image_url: 'https://cdn.myanimelist.net/images/anime/4/19644l.jpg',
    },
    webp: {
      image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.webp',
      small_image_url: 'https://cdn.myanimelist.net/images/anime/4/19644t.webp',
      large_image_url: 'https://cdn.myanimelist.net/images/anime/4/19644l.webp',
    },
  },
  trailer: {
    youtube_id: 'qig4KOK2R2g',
    url: 'https://www.youtube.com/watch?v=qig4KOK2R2g',
    embed_url: 'https://www.youtube.com/embed/qig4KOK2R2g?enablejsapi=1&wmode=opaque&autoplay=1',
    images: {
      image_url: 'https://img.youtube.com/vi/qig4KOK2R2g/default.jpg',
      small_image_url: 'https://img.youtube.com/vi/qig4KOK2R2g/sddefault.jpg',
      medium_image_url: 'https://img.youtube.com/vi/qig4KOK2R2g/mqdefault.jpg',
      large_image_url: 'https://img.youtube.com/vi/qig4KOK2R2g/hqdefault.jpg',
      maximum_image_url: 'https://img.youtube.com/vi/qig4KOK2R2g/maxresdefault.jpg',
    },
  },
  title: 'Cowboy Bebop',
  title_english: 'Cowboy Bebop',
  title_japanese: 'カウボーイビバップ',
  title_synonyms: [],
  type: 'TV',
  source: 'Original',
  episodes: 26,
  status: 'Finished Airing',
  airing: false,
  aired: {
    from: '1998-04-03T00:00:00+00:00',
    to: '1999-04-24T00:00:00+00:00',
    prop: {
      from: {
        day: 3,
        month: 4,
        year: 1998,
      },
      to: {
        day: 24,
        month: 4,
        year: 1999,
      },
    },
    string: 'Apr 3, 1998 to Apr 24, 1999',
  },
  duration: '24 min per ep',
  rating: 'R - 17+ (violence & profanity)',
  score: 8.77,
  scored_by: 737728,
  rank: 35,
  popularity: 43,
  members: 1535077,
  favorites: 67779,
  synopsis:
    'In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as "Cowboys." The ragtag team aboard the spaceship Bebop are two such individuals. Mellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member\'s dark and mysterious past little by little. Well-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after. [Written by MAL Rewrite]',
  background:
    'When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes 2, 3, 7-15, and 18 were broadcast, it was concluded with a recap special known as Yose Atsume Blues. This was due to anime censorship having increased following the big controversies over Evangelion, as a result most of the series was pulled from the air due to violent content. Satellite channel WOWOW picked up the series in the fall of that year and aired it in its entirety uncensored. Cowboy Bebop was not a ratings hit in Japan, but sold over 19,000 DVD units in the initial release run, and 81,000 overall. Protagonist Spike Spiegel won Best Male Character, and Megumi Hayashibara won Best Voice Actor for her role as Faye Valentine in the 1999 and 2000 Anime Grand Prix, respectively. Cowboy Bebop\'s biggest influence has been in the United States, where it premiered on Adult Swim in 2001 with many reruns since. The show\'s heavy Western influence struck a chord with American viewers, where it became a "gateway drug" to anime aimed at adult audiences.',
  season: 'spring',
  year: 1998,
  broadcast: {
    day: 'Saturdays',
    time: '01:00',
    timezone: 'Asia/Tokyo',
    string: 'Saturdays at 01:00 (JST)',
  },
  producers: [
    {
      mal_id: 23,
      type: 'anime',
      name: 'Bandai Visual',
      url: 'https://myanimelist.net/anime/producer/23/Bandai_Visual',
    },
  ],
  licensors: [
    {
      mal_id: 102,
      type: 'anime',
      name: 'Funimation',
      url: 'https://myanimelist.net/anime/producer/102/Funimation',
    },
    {
      mal_id: 233,
      type: 'anime',
      name: 'Bandai Entertainment',
      url: 'https://myanimelist.net/anime/producer/233/Bandai_Entertainment',
    },
  ],
  studios: [
    {
      mal_id: 14,
      type: 'anime',
      name: 'Sunrise',
      url: 'https://myanimelist.net/anime/producer/14/Sunrise',
    },
  ],
  genres: [
    {
      mal_id: 1,
      type: 'anime',
      name: 'Action',
      url: 'https://myanimelist.net/anime/genre/1/Action',
    },
    {
      mal_id: 2,
      type: 'anime',
      name: 'Adventure',
      url: 'https://myanimelist.net/anime/genre/2/Adventure',
    },
    {
      mal_id: 4,
      type: 'anime',
      name: 'Comedy',
      url: 'https://myanimelist.net/anime/genre/4/Comedy',
    },
    {
      mal_id: 8,
      type: 'anime',
      name: 'Drama',
      url: 'https://myanimelist.net/anime/genre/8/Drama',
    },
    {
      mal_id: 24,
      type: 'anime',
      name: 'Sci-Fi',
      url: 'https://myanimelist.net/anime/genre/24/Sci-Fi',
    },
  ],
  explicit_genres: [],
  themes: [
    {
      mal_id: 29,
      type: 'anime',
      name: 'Space',
      url: 'https://myanimelist.net/anime/genre/29/Space',
    },
  ],
  demographics: [],
};

test('should render a search bar', async () => {
  render(<Home />);

  const searchBar = await screen.findByPlaceholderText(/search shows/i);
  expect(searchBar).toBeInTheDocument();

  const header = screen.getByRole('heading', { name: /search for your anime/i });
  expect(header).toBeInTheDocument();
});

test('should render movie card', async () => {
  render(<DisplayData filter={[user]} />);

  const poster = screen.getByAltText(/Cowboy Bebop/i);
  expect(poster).toBeInTheDocument();

  const movieTitle = screen.getByText(user.title);
  expect(movieTitle).toBeInTheDocument();
});
