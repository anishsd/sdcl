import styled from 'styled-components';
import { TypographyProps } from '../Typography';
import commonStyles from './common';
import resetStyles from './reset';
import robotoStyles from './roboto';

export const Body = styled.p<TypographyProps>`
  ${resetStyles}
  ${commonStyles}
  ${robotoStyles}

  font-size:1.125rem;
  font-weight: 400;
  line-height: 2rem;
`;

export default Body;
