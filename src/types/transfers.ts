export interface ITransfersState {
  transfers: ITransfer[];
  activeTransfers: string[] | [];
  visibleTicketsLength: number;
}

export interface ITransfer {
  id: string;
  label: string;
  state: boolean;
}

export enum ETransfersActionTypes {
  ALL_TRANSFERS = 'ALL_TRANSFERS',
  NO_TRANSFERS = 'NO_TRANSFERS',
  CHECK_TRANSFER = 'CHECK_TRANSFER',
  UNCHECK_TRANSFER = 'UNCHECK_TRANSFER',
  SET_ACTION_TRANSFERS = 'SET_ACTION_TRANSFERS',
  ON_CHANGE_VISIBLE_TICKETS_LENGTH = 'ON_CHANGE_VISIBLE_TICKETS_LENGTH',
}

interface IAllTransfers {
  type: ETransfersActionTypes.ALL_TRANSFERS;
}
interface INoTransfers {
  type: ETransfersActionTypes.NO_TRANSFERS;
}
interface ICheckTransfer {
  type: ETransfersActionTypes.CHECK_TRANSFER;
  payload: string;
}
interface IUncheckTransfer {
  type: ETransfersActionTypes.UNCHECK_TRANSFER;
  payload: string;
}
interface IOnChengVisibleTicketsLength {
  type: ETransfersActionTypes.ON_CHANGE_VISIBLE_TICKETS_LENGTH;
  payload: number;
}

interface ISetActionTransfers {
  type: ETransfersActionTypes.SET_ACTION_TRANSFERS;
}

export type TTransfersActions =
  | IAllTransfers
  | INoTransfers
  | ICheckTransfer
  | IUncheckTransfer
  | ISetActionTransfers
  | IOnChengVisibleTicketsLength;
