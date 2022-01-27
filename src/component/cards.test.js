import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../views/home';

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
