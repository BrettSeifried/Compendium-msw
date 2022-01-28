import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../views/home';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { billy } from '../services/data';
import App from '../App';

const server = setupServer(
  rest.get('https://api.jikan.moe/v4/anime', (req, res, ctx) => {
    return res(ctx.json(billy));
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test('should be able to search for a movie', async () => {
  render(<Home />);

  const searchBar = await screen.findByRole('textbox');
  const movieTitle = 'Cowboy Bebop';

  userEvent.type(searchBar, movieTitle);

  const anime = await screen.findAllByText(movieTitle, { exact: false });

  const resp = anime.map((obj) => obj.textContent);

  const handleTitle = (title) => title.toLowerCase().includes(movieTitle);
  const matching = resp.every(handleTitle);
  expect(matching).toBe(false);
});

test('Should search for a movie by Title', async () => {
  render(<App />);

  const searchBar = await screen.findByRole('textbox');

  const characterName = 'Cowboy Bebop';

  userEvent.type(searchBar, characterName);
});
