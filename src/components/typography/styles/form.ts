import styled from 'styled-components';
import { TypographyProps } from '../Typography';
import commonStyles from './common';
import resetStyles from './reset';
import robotoStyles from './roboto';

export const Form = styled.p<TypographyProps>`
  ${resetStyles}
  ${commonStyles}
  ${robotoStyles}

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

export default Form;
