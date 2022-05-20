import styled from 'styled-components';
import { TypographyProps } from '../Typography';
import commonStyles from './common';
import resetStyles from './reset';
import robotoStyles from './roboto';
import breakpoints from '../../../utils/breakpoints';

export const Lead = styled.p<TypographyProps>`
  ${resetStyles}
  ${commonStyles}
  ${robotoStyles}

  font-size: 1.25rem;
  font-weight: 500;
  line-height: 2rem;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 1.5rem;
  }
`;

export default Lead;
