import styled from 'styled-components';
import { TypographyProps } from '../Typography';
import commonStyles from './common';
import nimbusStyles from './nimbus';
import resetStyles from './reset';
import breakpoints from '../../../utils/breakpoints';

export const H6 = styled.h6<TypographyProps>`
  ${resetStyles}
  ${commonStyles}
  ${nimbusStyles}

  font-size:1.125rem;
  line-height: 1.125rem;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;

export default H6;
