import { Dispatch } from 'react';

import { ETicketsActionsTypes, TTicketsActions } from '../../types/tickets';

const API_URL = 'https://aviasales-test-api.kata.academy';

// 31b4a3cd21a7ed9086d3334d85930c53

export const fetchTickets = (searchId: string) => {
  return async (dispatch: Dispatch<TTicketsActions>) => {
    try {
      dispatch({ type: ETicketsActionsTypes.FETCH_TICKETS });
      const response = await fetch(`${API_URL}/tickets?searchId=${searchId}`);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: ETicketsActionsTypes.FETCH_TICKETS_SUCCESS, payload: data });
      } else {
        throw new Error('');
      }
    } catch (e) {
      dispatch({ type: ETicketsActionsTypes.FETCH_TICKETS_ERROR });
    }
  };
};

export const fetchSearchId = () => {
  return async (dispatch: Dispatch<TTicketsActions>) => {
    try {
      const response = await fetch(`${API_URL}/search`);
      if (response.ok) {
        const data: { searchId: string } = await response.json();
        dispatch({ type: ETicketsActionsTypes.FETCH_SEARCH_ID, payload: data.searchId });
      }
    } catch (e) {
      dispatch({ type: ETicketsActionsTypes.FETCH_TICKETS_ERROR });
    }
  };
};
