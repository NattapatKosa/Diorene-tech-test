


export type TButtonVariant = 'primary' | 'secondary' | 'text' ;

export type TButtonSize = 'small' | 'medium' | 'large';



export type TStyledButton = {
  variant: TButtonVariant;  
  size? : TButtonSize;
  isLoading?: boolean;
  isIcon?: boolean;
};
