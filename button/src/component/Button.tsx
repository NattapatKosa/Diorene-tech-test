import { ButtonHTMLAttributes, forwardRef , useCallback} from 'react';
import {TButtonVariant, TButtonSize} from './types'
import { ReactComponent as LoadingIcon} from '../public/Loading.svg';
import {StyledButton} from './styles'


interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean;  
  variant?: TButtonVariant;
  size?: TButtonSize;
  isIcon?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, IButton>(
  ({ children, 
    variant = 'primary', 
    isLoading, 
    isIcon = false,
    size = 'large',
    disabled,
    onClick,  
    ...rest }, 
    ref)   => {
      const handleClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
          if (!isLoading && !disabled && onClick) {
            onClick(e);
          }
        },
        [disabled, isLoading, onClick]
      );
    return (
      <StyledButton
        {...{ ...rest, ref, variant,size }}
        isLoading={isLoading}
        disabled={disabled ||  isLoading}
        isIcon = {isIcon}
        onClick={handleClick}
      >
        {isLoading ? variant === 'text' ? 'Loading' : <LoadingIcon/> : children}
      </StyledButton>
    );
  }
);

