import { ISortState, TSortActions, ESortActionTypes } from '../../types/sort';

const initialState: ISortState = {
  sortMenu: [
    { id: 1, label: 'Самый дешевый', value: 'cheap' },
    { id: 2, label: 'Самый быстрый', value: 'fast' },
    { id: 5, label: 'Оптимальный', value: 'optimal' },
  ],
  activeSort: 'cheap',
};

export const sortReducer = (state = initialState, action: TSortActions): ISortState => {
  switch (action.type) {
    case ESortActionTypes.ON_CHANGE_ACTION_SORT:
      return { ...state, activeSort: action.payload };
    default:
      return state;
  }
};
