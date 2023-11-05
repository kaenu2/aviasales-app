import { ETicketsActionsTypes, ITicketsState, TTicketsActions } from '../../types/tickets';

const initialState: ITicketsState = {
  isLoading: false,
  isError: false,
  tickets: [],
  stop: false,
  searchId: '',
  hasNetworkError: true,
};

export const ticketsReducer = (state = initialState, action: TTicketsActions): ITicketsState => {
  switch (action.type) {
    case ETicketsActionsTypes.FETCH_TICKETS:
      return { ...state, isLoading: true, isError: false, hasNetworkError: true };
    case ETicketsActionsTypes.FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        tickets: [...state.tickets, ...action.payload.tickets],
        stop: action.payload.stop,
        hasNetworkError: true,
      };
    case ETicketsActionsTypes.FETCH_TICKETS_ERROR:
      return { ...state, isLoading: false, isError: true, stop: false };
    case ETicketsActionsTypes.FETCH_SEARCH_ID:
      return { ...state, searchId: action.payload };
    case ETicketsActionsTypes.NETWORK_ERROR:
      return { ...state, hasNetworkError: action.payload, stop: true, isLoading: false };
    default:
      return state;
  }
};
