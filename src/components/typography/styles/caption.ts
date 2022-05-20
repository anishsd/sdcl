import styled from 'styled-components';
import { TypographyProps } from '../Typography';
import resetStyles from './reset';
import robotoStyles from './roboto';

export const Caption = styled.p<TypographyProps>`
  ${resetStyles}
  ${robotoStyles}

  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  text-align: left;
  color: var(--clr-tuna-gray);
`;

export default Caption;
