import styled from 'styled-components';
import { TypographyProps } from '../Typography';
import commonStyles from './common';
import nimbusStyles from './nimbus';
import resetStyles from './reset';
import breakpoints from '../../../utils/breakpoints';

export const H3 = styled.h3<TypographyProps>`
  ${resetStyles}
  ${commonStyles}
  ${nimbusStyles}

  font-size: 2rem;
  line-height: 2rem;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 3rem;
    line-height: 3rem;
  }
`;

export default H3;
