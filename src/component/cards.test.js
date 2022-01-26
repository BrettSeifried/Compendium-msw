import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library.user-event';
import Home from '../views/home';

test('should be able to search for a movie', async () => {
  render(<Home />);

  const searchBar = await screen.findByRole('textbox');
});
