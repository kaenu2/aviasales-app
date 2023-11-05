export interface IProps {
  label: string;
  type?: TType;
  title?: string | undefined;
}

export enum EType {
  warning = 'warning',
  error = 'error',
}

export type TType = 'warning' | 'error' | undefined;
