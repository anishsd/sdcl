import { css } from 'styled-components';
import { ButtonProps } from '../Button';

const hoverStyles = (p: ButtonProps) => {
  let color, backgroundColor, boxShadow;

  switch (p.variant) {
    case 'secondary':
      color = p.dark ? 'var(--clr-yellow-60)' : 'var(--clr-purple-60)';
      backgroundColor = p.dark ? 'var(--clr-tuna-gray)' : 'var(--clr-white)';
      boxShadow = p.dark ? 'var(--shadow-xl-dark)' : 'var(--shadow-xl-light)';
      break;
    case 'tertiary':
      color = p.dark ? 'var(--clr-white)' : 'var(--clr-tuna-gray-60)';
      backgroundColor = 'transparent';
      boxShadow = 'none';
      break;
    default:
      color = 'var(--clr-white)';
      backgroundColor = 'var(--clr-orange-60)';
      boxShadow = 'var(--shadow-xl-light)';
  }

  return css`
    &:hover {
      color: ${color};
      background-color: ${backgroundColor};
      box-shadow: ${boxShadow};
    }
  `;
};

export default hoverStyles;
