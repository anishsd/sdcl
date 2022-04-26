import React from 'react';
import PropTypes from 'prop-types';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Lead,
  Body,
  Form,
  Small,
  Caption,
  Tiny,
} from './styles';

const typographyMap = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  lead: Lead,
  body: Body,
  form: Form,
  small: Small,
  caption: Caption,
  tiny: Tiny,
};

type TypographyTypes = keyof typeof typographyMap;

export interface TypographyProps
  extends React.ComponentPropsWithoutRef<'h1'>,
    React.ComponentPropsWithoutRef<'h2'>,
    React.ComponentPropsWithoutRef<'h3'>,
    React.ComponentPropsWithoutRef<'h4'>,
    React.ComponentPropsWithoutRef<'h5'>,
    React.ComponentPropsWithoutRef<'h6'>,
    React.ComponentPropsWithoutRef<'p'> {
  type: TypographyTypes;
}

export const Typography = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  TypographyProps
>(({ type, children, ...props }, ref) => {
  const StyledTypography = typographyMap[type];

  return (
    <StyledTypography ref={ref} type={type} {...props}>
      {children}
    </StyledTypography>
  );
});

Typography.displayName = 'Typography';

Typography.propTypes = {
  type: PropTypes.oneOf(Object.keys(typographyMap) as TypographyTypes[])
    .isRequired,
};

Typography.defaultProps = {
  type: 'h1',
};
