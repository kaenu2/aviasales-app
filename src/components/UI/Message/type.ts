export interface IProps {
  label: string;
  type?: TType;
}

export enum EType {
  warning = 'warning',
  error = 'error',
}

export type TType = 'warning' | 'error' | undefined;
