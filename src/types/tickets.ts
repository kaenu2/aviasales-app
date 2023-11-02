export interface ITicketsState {
  isLoading: boolean;
  isError: boolean;
  tickets: ITicket[] | [];
  stop: boolean;
  searchId: string;
}

export interface ITicket {
  price: number;
  carrier: string;
  segments: ISegments[];
}

export interface ISegments {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

export enum ETicketsActionsTypes {
  FETCH_TICKETS = 'FETCH_TICKETS',
  FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',
  FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR',
  FETCH_SEARCH_ID = 'FETCH_SEARCH_ID',
}

interface IFetchTickets {
  type: ETicketsActionsTypes.FETCH_TICKETS;
}
interface IFetchTicketsSuccess {
  type: ETicketsActionsTypes.FETCH_TICKETS_SUCCESS;
  payload: any;
}
interface IFetchTicketsError {
  type: ETicketsActionsTypes.FETCH_TICKETS_ERROR;
}

interface IFetchSearchId {
  type: ETicketsActionsTypes.FETCH_SEARCH_ID;
  payload: string;
}

export type TTicketsActions = IFetchTickets | IFetchTicketsSuccess | IFetchTicketsError | IFetchSearchId;
