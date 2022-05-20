import { css } from 'styled-components';
import { ButtonProps } from '../Button';

const dynamicStyles = (p: ButtonProps) => {
  let color, backgroundColor, padding, boxShadow;

  switch (p.variant) {
    case 'secondary':
      color = p.dark ? 'var(--clr-yellow)' : 'var(--clr-purple)';
      backgroundColor = p.dark ? 'var(--clr-tuna-gray)' : 'var(--clr-white)';
      padding = p.size === 'default' ? '0.5rem 1rem' : '1rem 1.5rem';
      boxShadow = p.dark ? 'var(--shadow-lg-dark)' : 'var(--shadow-lg-light)';
      break;
    case 'tertiary':
      color = p.dark ? 'var(--clr-slate-gray-20)' : 'var(--clr-tuna-gray-80)';
      backgroundColor = 'transparent';
      padding = '0';
      boxShadow = 'none';
      break;
    default:
      color = 'var(--clr-white)';
      backgroundColor = 'var(--primary)';
      padding = p.size === 'default' ? '0.5rem 1rem' : '1rem 1.5rem';
      boxShadow = 'var(--shadow-lg-light)';
  }

  return css`
    color: ${color};
    background-color: ${backgroundColor};
    padding: ${padding};
    box-shadow: ${boxShadow};
  `;
};

export default dynamicStyles;
