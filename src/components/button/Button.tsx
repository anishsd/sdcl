import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';
import { useCustomTheme } from '../custom-theme-provider/CustomThemeProvider';
import { ColorMode } from '../../types/index.d';

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
  ({ children, variant = 'primary', size, disabled, dark, ...props }, ref) => {
    const { scheme } = useCustomTheme();

    const isDark = useCallback(
      () => dark ?? scheme === ColorMode.Dark,
      [dark, scheme]
    );

    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        dark={isDark()}
        disabled={disabled}
        type="button"
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
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
  disabled: false,
};
