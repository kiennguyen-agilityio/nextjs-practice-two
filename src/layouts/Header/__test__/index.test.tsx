import { render } from '@testing-library/react';
import Header from '@/layouts/Header';

test('renders Header component and matches snapshot', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});
