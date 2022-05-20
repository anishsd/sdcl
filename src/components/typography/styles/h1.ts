import styled from 'styled-components';
import { TypographyProps } from '../Typography';
import commonStyles from './common';
import nimbusStyles from './nimbus';
import resetStyles from './reset';
import breakpoints from '../../../utils/breakpoints';

export const H1 = styled.h1<TypographyProps>`
  ${resetStyles}
  ${commonStyles}
  ${nimbusStyles}

  font-size: 3.5rem;
  line-height: 3.5rem;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 5.5rem;
    line-height: 5.5rem;
  }
`;

export default H1;
