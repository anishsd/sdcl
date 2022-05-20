import styled from 'styled-components';
import { TypographyProps } from '../Typography';
import commonStyles from './common';
import nimbusStyles from './nimbus';
import resetStyles from './reset';
import breakpoints from '../../../utils/breakpoints';

export const H2 = styled.h2<TypographyProps>`
  ${resetStyles}
  ${commonStyles}
  ${nimbusStyles}

  font-size: 2.5rem;
  line-height: 2.5rem;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 4rem;
    line-height: 4rem;
  }
`;

export default H2;
