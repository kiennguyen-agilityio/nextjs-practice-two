import { render } from '@testing-library/react';
import Footer from '@/layouts/Footer';

test('renders Footer component and matches snapshot', () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});
