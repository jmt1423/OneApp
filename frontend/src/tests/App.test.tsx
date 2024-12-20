import { render, screen } from '@testing-library/react';
import { describe, expect, it, test } from 'vitest';
import App from '../app';
import { HashRouter } from 'react-router';

describe('App', () => {
  it('renders the App component', () => {
    <HashRouter>

      render(<App />)
    </HashRouter>

    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})
