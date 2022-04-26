import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { Typography } from './Typography';

describe('Typography', () => {
  it('applies the correct h3 tag', () => {
    render(
      <Typography type="h3" data-testid="typography">
        hello
      </Typography>
    );

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });

  it('applies the correct caption tag', async () => {
    render(
      <Typography type="caption" data-testid="typography">
        Hello
      </Typography>
    );

    const renderedEl = ReactDOM.findDOMNode(
      await screen.findByTestId('typography')
    ) as Element;

    expect(renderedEl?.tagName).toBe('P');
  });
});
