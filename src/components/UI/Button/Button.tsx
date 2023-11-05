import React from 'react';

import { EBorderStyles, EButtonsType, IProps, TBorderStyles, TButtonsType } from './type';
import './Button.scss';

export const Button = ({ label, type, borderStyles, callback }: IProps) => {
  const onCheckStyle = (values: TButtonsType): string => {
    switch (values) {
      case EButtonsType.primary:
        return 'primary';
      default:
        return '';
    }
  };

  const onCheckBorderStyles = (value: TBorderStyles): string => {
    switch (value) {
      case EBorderStyles.brl:
        return 'border-left';
      case EBorderStyles.brr:
        return 'border-right';
      case EBorderStyles.brn:
        return 'border-radius--none';
      default:
        return '';
    }
  };
  return (
    <button className={`btn ${onCheckStyle(type)} ${onCheckBorderStyles(borderStyles)}`} onClick={callback}>
      {label}
    </button>
  );
};
