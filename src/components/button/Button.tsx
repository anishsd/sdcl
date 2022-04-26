import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'default' | 'big';
  dark?: boolean;
  disabled?: boolean;
}

/**
 * Accepts all `ButtonHTMLAttributes`
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, dark, disabled, ...props }, ref) => (
    <StyledButton
      ref={ref}
      variant={variant}
      size={size}
      dark={dark}
      disabled={disabled}
      type="button"
      {...props}
    >
      {children}
      {variant === 'tertiary' && (
        <svg
          width="20"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-icon"
        >
          <path d="M11.515.515 20 9l-8.485 8.485-1.414-1.414L16.17 10H0V8h16.172L10.1 1.929 11.515.515Z" />
        </svg>
      )}
    </StyledButton>
  )
);

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['default', 'big']),
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'default',
  dark: false,
  disabled: false,
};
