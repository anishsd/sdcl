import { css } from 'styled-components';
import { ButtonProps } from '../Button';

const activeStyles = (p: ButtonProps) => {
  let color, backgroundColor, boxShadow;

  switch (p.variant) {
    case 'secondary':
      color = p.dark ? 'var(--clr-yellow)' : 'var(--clr-purple)';
      backgroundColor = p.dark
        ? 'var(--clr-tuna-gray-120)'
        : 'var(--clr-tuna-gray-20)';
      boxShadow = p.dark ? 'var(--shadow-md-dark)' : 'var(--shadow-md-light)';
      break;
    case 'tertiary':
      color = p.dark ? 'var(--clr-slate-gray-60)' : 'var(--clr-tuna-gray)';
      backgroundColor = 'transparent';
      boxShadow = 'none';
      break;
    default:
      color = 'var(--clr-orange-20)';
      backgroundColor = 'var(--clr-orange-120)';
      boxShadow = 'var(--shadow-md-light)';
  }

  return css`
    &:active {
      color: ${color};
      background-color: ${backgroundColor};
      box-shadow: ${boxShadow};
    }
  `;
};

export default activeStyles;
