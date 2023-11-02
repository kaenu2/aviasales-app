import React from 'react';

export interface IProps {
  state: boolean;
  label: string;
  callback: (e: React.ChangeEvent<HTMLInputElement>) => any;
}
