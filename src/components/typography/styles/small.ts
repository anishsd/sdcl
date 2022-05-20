import styled from 'styled-components';
import { TypographyProps } from '../Typography';
import commonStyles from './common';
import resetStyles from './reset';
import robotoStyles from './roboto';

export const Small = styled.p<TypographyProps>`
  ${resetStyles}
  ${commonStyles}
  ${robotoStyles}

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

export default Small;
