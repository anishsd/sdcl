import styled, { css } from 'styled-components';
import breakpoints from '../../utils/breakpoints';
import { TypographyProps } from './Typography';
import '../../../.storybook/themes/default.css';

const nimbusStyles = () => css`
  font-family: 'nimbus-sans', sans-serif;
  letter-spacing: 0rem;
`;

const robotoStyles = () => css`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
`;

const commonStyles = () => css`
  text-align: left;
  color: var(--clr-tuna-gray);
  letter-spacing: 0rem;
`;

const resetStyles = () => css`
  margin: 0;
  padding: 0;
`;

const h1Styles = () => css`
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

const h2Styles = () => css`
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

const h3Styles = () => css`
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

const h4Styles = () => css`
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

const h5Styles = () => css`
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

const h6Styles = () => css`
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

const leadStyles = () => css`
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

const bodyStyles = () => css`
  ${resetStyles}
  ${commonStyles}
  ${robotoStyles}
  font-size:1.125rem;
  font-weight: 400;
  line-height: 2rem;
`;

const formStyles = () => css`
  ${resetStyles}
  ${commonStyles}
  ${robotoStyles}
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

const smallStyles = () => css`
  ${resetStyles}
  ${commonStyles}
  ${robotoStyles}
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
`;

const captionStyles = () => css`
  ${resetStyles}
  ${robotoStyles}
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  text-align: left;
  color: var(--clr-tuna-gray);
`;

const tinyStyles = () => css`
  ${resetStyles};
  ${commonStyles};
  ${robotoStyles};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
`;

export const H1 = styled.h1<TypographyProps>`
  ${h1Styles}
`;

export const H2 = styled.h2<TypographyProps>`
  ${h2Styles}
`;

export const H3 = styled.h3<TypographyProps>`
  ${h3Styles}
`;

export const H4 = styled.h4<TypographyProps>`
  ${h4Styles}
`;

export const H5 = styled.h5<TypographyProps>`
  ${h5Styles}
`;

export const H6 = styled.h6<TypographyProps>`
  ${h6Styles}
`;

export const Lead = styled.p<TypographyProps>`
  ${leadStyles}
`;

export const Body = styled.p<TypographyProps>`
  ${bodyStyles}
`;

export const Form = styled.p<TypographyProps>`
  ${formStyles}
`;

export const Small = styled.p<TypographyProps>`
  ${smallStyles}
`;

export const Caption = styled.p<TypographyProps>`
  ${captionStyles}
`;

export const Tiny = styled.p<TypographyProps>`
  ${tinyStyles}
`;
