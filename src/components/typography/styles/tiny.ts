import styled from 'styled-components';
import { TypographyProps } from '../Typography';
import commonStyles from './common';
import resetStyles from './reset';
import robotoStyles from './roboto';

export const Tiny = styled.p<TypographyProps>`
  ${resetStyles};
  ${commonStyles};
  ${robotoStyles};

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
`;

export default Tiny;
