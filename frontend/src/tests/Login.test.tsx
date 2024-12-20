import { render, screen } from '@testing-library/react';
import { describe, expect, it, test } from 'vitest';
import Login from '../app/routes/auth/login';
import { HashRouter } from 'react-router';

describe('Login', () => {
  it('renders Login screen with form', () => {
    <HashRouter>
      render(<Login />)

    </HashRouter>

    screen.debug();
  })
})
