import styled, { css } from "styled-components";
import { TStyledButton, TButtonVariant, TButtonSize } from "./types"
import {Theme} from "../Theme/theme"



const getButtonVariant = ( variant: TButtonVariant , theme = Theme) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${theme.colors.lightPurple};
        color: ${theme.colors.white};

        &:not(:disabled):hover {
          background-color: ${theme.colors.DarkPurple} ;
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.DarkPurple};
        }

        &:focus {
          box-shadow: 0 0 0 8px ${theme.colors.lighWhite};
        }
        
        &:not(:disabled):active { 
          background-color: ${theme.colors.lightPurple} ;
          border: 1px solid transparent ;
        }
      `;
    case 'secondary':
      return css`
        background-color: transparent;
        color: ${theme.colors.black};
        border: 1px solid ${theme.colors.black};
        

        svg.Loading path {
          stroke: ${theme.colors.DarkPurple};
        }
        &:not(:disabled):hover {
          background-color: ${theme.colors.white};
          color: ${theme.colors.black};
          border : 1px solid ${theme.colors.black};
        }

        &:focus {
          box-shadow: 0 0 0 8px ${theme.colors.whiteGrey}
        }

        &:not(:disabled):active {
          color: ${theme.colors.black};
          border: 1px solid ${theme.colors.black};
        }
      `;
    case 'text':
      return css`
        background-color: transparent;
        color: ${theme.colors.DarkPurple};
        min-width: 48px;

        &:not(:disabled):hover {
          color: ${theme.colors.BlackPurple};
        }

        &:focus {
          background-color: ${theme.colors.whiteGrey};
        }

        &:not(:disabled):actve{
          background-color: transparent;
          color: ${theme.colors.black}
        }
        `;
  }
};

const buttonSize = ( sizes?: TButtonSize) => {
  if (sizes === 'small') {
    return css`
      min-height: 40px; 
      padding: 18px 32px;
      min-width: 117.4px;
    `
  } else if (sizes === 'medium') {
    return css`
      min-height: 48px;
      padding: 14px 32px;
    `
  } else if (sizes === 'large') {
    return css`
      min-height: 56px;
      padding: 8px 24px;
    `
  }
}

const iconStyles = (theme=Theme ,variant?: TButtonVariant, isIcon?: boolean) => {
  let styled;
  if (isIcon === true) {
    if (variant === 'primary') {
     styled = css`
      &:not(:disabled):active{
        background-color: ${theme.colors.black} ;
      }
      &:not(:disabled):hover {
        border-width: 2px ; 
      }
      `;
    }
    if (variant === 'secondary') {
     styled = css`
    svg path {
      stroke: ${theme.colors.lightPurple};
    }
    svg.Loading path {
      stroke: ${theme.colors.lightPurple};
    }
    &:not(:disabled):hover {
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.black};
      svg path {
        stroke: ${theme.colors.black}
      }
    }
    &:focus {
      box-shadow: 0 0 0 8px ${theme.colors.DarkPurple};
    }
    &:not(:disabled):active {
      svg path {
        stroke: ${theme.colors.black};
      }
    }
    `;
    }
    else {
      styled = ``;
    }

    
    return css`
      
      
      border-radius: 80px ;
      padding: 16px ;
      border: 2px solid ${theme.colors.lightPurple} ; 
      min-width: 56px ;  
      min-height: 56px ;
      ${styled}
    `;
  }
};

export const StyledButton = styled.button<TStyledButton>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  min-width: 195.66px;
  padding: 0 26px;
  border: 1px solid transparent;
  border-radius: 16px;
  opacity: ${({isLoading,disabled}) => (isLoading === false && disabled  ? 0.5 : 1)};
  transition: color 0.3s ease-out, background 0.3s ease-out, opacity 0.3s ease-out;
  outline: none;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: 'Poppins';
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  svg.Loading {
    cursor: inherit;
    animation: spin infinite 3s linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(360deg)
    }
  }


  
  ${({variant, theme }) => getButtonVariant( variant, theme )};
  ${({size}) => buttonSize(size)};
  ${({theme, variant , isIcon}) => iconStyles(theme, variant , isIcon)};
`;
