import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import CustomThemeProvider from '../custom-theme-provider/CustomThemeProvider';
import { Theme } from '../../types';

describe('Button', () => {
  it('applies default type of button', () => {
    render(
      <CustomThemeProvider theme={Theme.Country}>
        <Button>hello</Button>
      </CustomThemeProvider>
    );

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('applies specific type if provided', () => {
    render(
      <CustomThemeProvider theme={Theme.Country}>
        <Button type="submit">hello</Button>
      </CustomThemeProvider>
    );

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('applies valid attribute to element', () => {
    render(
      <CustomThemeProvider theme={Theme.Country}>
        <Button aria-label="Test">Hello</Button>
      </CustomThemeProvider>
    );

    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Test');
  });
});
