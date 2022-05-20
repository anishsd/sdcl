import styled from 'styled-components';
import { TypographyProps } from '../Typography';
import commonStyles from './common';
import nimbusStyles from './nimbus';
import resetStyles from './reset';
import breakpoints from '../../../utils/breakpoints';

export const H5 = styled.h5<TypographyProps>`
  ${resetStyles}
  ${commonStyles}
  ${nimbusStyles}

  font-size: 1.375rem;
  line-height: 1.375rem;

  @media (min-width: ${breakpoints.lg}) {
    font-size: 2rem;
    line-height: 2rem;
  }
`;

export default H5;
