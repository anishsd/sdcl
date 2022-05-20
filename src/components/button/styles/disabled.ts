import { css } from 'styled-components';
import { ButtonProps } from '../Button';

const disabledStyles = (p: ButtonProps) => {
  let color = 'var(--clr-white)';
  let backgroundColor = 'var(--clr-orange-20)';

  switch (p.variant) {
    case 'secondary':
      color = p.dark ? 'var(--clr-tuna-gray-60)' : 'var(--clr-slate-gray-60)';
      backgroundColor = p.dark
        ? 'var(--clr-tuna-gray-80)'
        : 'var(--clr-tuna-gray-20)';
      break;
    case 'tertiary':
      color = p.dark ? 'var(--clr-tuna-gray-80)' : 'var(--clr-tuna-gray-40)';
      backgroundColor = 'transparent';
      break;
    default:
      color = 'var(--clr-white)';
      backgroundColor = 'var(--clr-orange-20)';
  }

  return css`
    &:disabled {
      color: ${color};
      background-color: ${backgroundColor};
      box-shadow: none;
      pointer-events: none;
    }
  `;
};

export default disabledStyles;
