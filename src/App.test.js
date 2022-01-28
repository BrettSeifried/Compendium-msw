import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import DisplayData from './component/card';
import { billy } from './services/data';
import App from './App';
import Home from './views/home';

const server = setupServer(
  rest.get('https://api.jikan.moe/v4/anime', (req, res, ctx) => {
    return res(ctx.json(billy));
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

test('should render movie card', async () => {
  render(<DisplayData filter={billy.data} />);
  screen.debug();

  const poster = screen.getByAltText(/Cowboy Bebop/i);
  expect(poster).toBeInTheDocument();

  const movieTitle = screen.getByText(billy.data[0].title);
  expect(movieTitle).toBeInTheDocument();
});

test('Should render the header with Cowboy Bebop', async () => {
  render(<App />);

  const movieTitle = await screen.findByText(/cowboy bebop/i);

  expect(movieTitle).toBeInTheDocument();
});
