import { css } from 'styled-components';
import { ButtonProps } from '../Button';

const focusStyles = (p: ButtonProps) => {
  let color, backgroundColor, boxShadow;

  switch (p.variant) {
    case 'secondary':
      color = p.dark ? 'var(--clr-yellow-60)' : 'var(--clr-purple-60)';
      backgroundColor = p.dark ? 'var(--clr-tuna-gray)' : 'var(--clr-white)';
      boxShadow = p.dark ? 'var(--shadow-md-dark)' : 'var(--shadow-md-light)';
      break;
    case 'tertiary':
      color = p.dark ? 'var(--clr-white)' : 'var(--clr-tuna-gray-60)';
      backgroundColor = 'transparent';
      boxShadow = 'none';
      break;
    default:
      color = 'var(--clr-orange-20)';
      backgroundColor = 'var(--clr-orange)';
      boxShadow = 'var(--shadow-md-light)';
  }

  return css`
    &:focus-visible {
      color: ${color};
      background-color: ${backgroundColor};
      box-shadow: ${boxShadow};
      outline: 0.125rem solid var(--clr-orange-140);
    }
  `;
};

export default focusStyles;
