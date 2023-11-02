import { ETransfersActionTypes, ITransfersState, TTransfersActions } from '../../types/transfers';

const initialState: ITransfersState = {
  transfers: [
    { id: 'all', label: 'Все', state: true },
    { id: 'noTransfers', label: 'Без пересадок', state: true },
    { id: 'oneTransfers', label: '1 пересадка', state: true },
    { id: 'twoTransfers', label: '2 пересадки', state: true },
    { id: 'threeTransfers', label: '3 пересадки', state: true },
  ],
  activeTransfers: ['noTransfers, oneTransfers, twoTransfers, threeTransfers'],
  visibleTicketsLength: 0,
};

export const transfersReducer = (state = initialState, action: TTransfersActions): ITransfersState => {
  switch (action.type) {
    case ETransfersActionTypes.ALL_TRANSFERS:
      return {
        ...state,
        transfers: state.transfers.map((transfer) => {
          return { ...transfer, state: (transfer.state = true) };
        }),
      };
    case ETransfersActionTypes.NO_TRANSFERS:
      return {
        ...state,
        transfers: state.transfers.map((transfer) => {
          return { ...transfer, state: (transfer.state = false) };
        }),
      };
    case ETransfersActionTypes.CHECK_TRANSFER:
      return {
        ...state,
        transfers: state.transfers.map((transfer) =>
          transfer.id === action.payload ? { ...transfer, state: true } : transfer
        ),
      };
    case ETransfersActionTypes.UNCHECK_TRANSFER:
      return {
        ...state,
        transfers: state.transfers.map((transfer) =>
          transfer.id === action.payload ? { ...transfer, state: false } : transfer
        ),
      };
    case ETransfersActionTypes.SET_ACTION_TRANSFERS:
      return {
        ...state,
        activeTransfers: state.transfers
          .filter((transfer) => transfer.id !== 'all' && transfer.state)
          .map((transfer) => transfer.id),
      };
    case ETransfersActionTypes.ON_CHANGE_VISIBLE_TICKETS_LENGTH:
      return { ...state, visibleTicketsLength: action.payload };
    default:
      return state;
  }
};
