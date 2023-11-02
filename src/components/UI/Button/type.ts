import React from 'react';

export interface IProps {
  label: string;
  type?: TButtonsType;
  borderStyles?: TBorderStyles;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => any;
}

export enum EButtonsType {
  primary = 'primary',
}
export enum EBorderStyles {
  brl = 'brl',
  brr = 'brr',
  brn = 'brn',
}

export type TButtonsType = 'primary' | undefined;
export type TBorderStyles = 'brl' | 'brr' | 'brn' | undefined;
