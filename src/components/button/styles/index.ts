import styled from 'styled-components';
import { ButtonProps } from '../Button';
import dynamicStyles from './dynamic';
import hoverStyles from './hover';
import focusStyles from './focus';
import activeStyles from './active';
import disabledStyles from './disabled';

const StyledButton = styled.button<ButtonProps>`
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

export default StyledButton;
