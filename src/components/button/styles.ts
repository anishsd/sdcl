import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';
import '../../../.storybook/themes/default.css';

const dynamicStyles = (p: ButtonProps) => {
  let color = 'var(--clr-white)';
  let backgroundColor = 'var(--primary)';
  let padding = p.size === 'default' ? '0.5rem 1rem' : '1rem 1.5rem';
  let boxShadow = 'var(--shadow-lg-light)';
  const arrowIconFill = p.dark ? 'var(--clr-yellow)' : 'var(--clr-orange)';

  if (p.variant === 'secondary') {
    color = p.dark ? 'var(--clr-yellow)' : 'var(--clr-purple)';
    backgroundColor = p.dark ? 'var(--clr-tuna-gray)' : 'var(--clr-white)';
    if (p.dark) boxShadow = 'var(--shadow-lg-dark)';
  } else if (p.variant === 'tertiary') {
    color = p.dark ? 'var(--clr-slate-gray-20)' : 'var(--clr-tuna-gray-80)';
    backgroundColor = 'transparent';
    padding = '0';
    boxShadow = 'none';
  }

  return css`
    color: ${color};
    background-color: ${backgroundColor};
    padding: ${padding};
    box-shadow: ${boxShadow};

    & > .arrow-icon {
      fill: ${arrowIconFill};
    }
  `;
};

const hoverStyles = (p: ButtonProps) => {
  let color = 'var(--clr-white)';
  let backgroundColor = 'var(--clr-orange-60)';
  let boxShadow = 'var(--shadow-xl-light)';

  if (p.variant === 'secondary') {
    color = p.dark ? 'var(--clr-yellow-60)' : 'var(--clr-purple-60)';
    backgroundColor = p.dark ? 'var(--clr-tuna-gray)' : 'var(--clr-white)';
    if (p.dark) boxShadow = 'var(--shadow-xl-dark)';
  } else if (p.variant === 'tertiary') {
    color = p.dark ? 'var(--clr-white)' : 'var(--clr-tuna-gray-60)';
    backgroundColor = 'transparent';
    boxShadow = 'none';
  }

  return css`
    &:hover {
      color: ${color};
      background-color: ${backgroundColor};
      box-shadow: ${boxShadow};
    }
  `;
};

const focusStyles = (p: ButtonProps) => {
  let color = 'var(--clr-orange-20)';
  let backgroundColor = 'var(--clr-orange)';
  let boxShadow = 'var(--shadow-md-light)';

  if (p.variant === 'secondary') {
    color = p.dark ? 'var(--clr-yellow-60)' : 'var(--clr-purple-60)';
    backgroundColor = p.dark ? 'var(--clr-tuna-gray)' : 'var(--clr-white)';
    if (p.dark) boxShadow = 'var(--shadow-md-dark)';
  } else if (p.variant === 'tertiary') {
    color = p.dark ? 'var(--clr-white)' : 'var(--clr-tuna-gray-60)';
    backgroundColor = 'transparent';
    boxShadow = 'none';
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

const activeStyles = (p: ButtonProps) => {
  let color = 'var(--clr-orange-20)';
  let backgroundColor = 'var(--clr-orange-120)';
  let boxShadow = 'var(--shadow-md-light)';

  if (p.variant === 'secondary') {
    color = p.dark ? 'var(--clr-yellow)' : 'var(--clr-purple)';
    backgroundColor = p.dark
      ? 'var(--clr-tuna-gray-120)'
      : 'var(--clr-tuna-gray-20)';
    if (p.dark) boxShadow = 'var(--shadow-md-dark)';
  } else if (p.variant === 'tertiary') {
    color = p.dark ? 'var(--clr-slate-gray-60)' : 'var(--clr-tuna-gray)';
    backgroundColor = 'transparent';
    boxShadow = 'none';
  }

  return css`
    &:active {
      color: ${color};
      background-color: ${backgroundColor};
      box-shadow: ${boxShadow};
    }
  `;
};

const disabledStyles = (p: ButtonProps) => {
  let color = 'var(--clr-white)';
  let backgroundColor = 'var(--clr-orange-20)';
  const arrowIconFill = p.dark
    ? 'var(--clr-tuna-gray-80)'
    : 'var(--clr-tuna-gray-40)';

  if (p.variant === 'secondary') {
    color = p.dark ? 'var(--clr-tuna-gray-60)' : 'var(--clr-slate-gray-60)';
    backgroundColor = p.dark
      ? 'var(--clr-tuna-gray-80)'
      : 'var(--clr-tuna-gray-20)';
  } else if (p.variant === 'tertiary') {
    color = p.dark ? 'var(--clr-tuna-gray-80)' : 'var(--clr-tuna-gray-40)';
    backgroundColor = 'transparent';
  }

  return css`
    &:disabled {
      color: ${color};
      background-color: ${backgroundColor};
      box-shadow: none;
      pointer-events: none;

      & > .arrow-icon {
        fill: ${arrowIconFill};
      }
    }
  `;
};

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 2rem;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: none;
  border-radius: 0.25rem;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.125rem;
  transition: all 0.15s ease-in-out;

  ${dynamicStyles}
  ${hoverStyles}
  ${focusStyles}
  ${activeStyles}
  ${disabledStyles}
`;
