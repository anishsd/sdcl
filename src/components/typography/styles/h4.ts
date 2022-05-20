import styled from 'styled-components';
import { TypographyProps } from '../Typography';
import commonStyles from './common';
import nimbusStyles from './nimbus';
import resetStyles from './reset';
import breakpoints from '../../../utils/breakpoints';

export const H4 = styled.h4<TypographyProps>`
  ${resetStyles}
  ${commonStyles}
  ${nimbusStyles}

  font-size: 1.5rem;
  line-height: 1.5rem;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
`;

export default H4;
