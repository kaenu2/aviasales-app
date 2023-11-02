export interface ISortState {
  sortMenu: ISortMenu[];
  activeSort: string;
}

export interface ISortMenu {
  id: number;
  label: string;
  value: string;
}

export enum ESortActionTypes {
  ON_CHANGE_ACTION_SORT = 'ON_CHANGE_ACTION_SORT',
}

interface IOnChangeActiveSortAction {
  type: ESortActionTypes.ON_CHANGE_ACTION_SORT;
  payload: string;
}

export type TSortActions = IOnChangeActiveSortAction;
