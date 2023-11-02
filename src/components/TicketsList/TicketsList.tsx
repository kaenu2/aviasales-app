import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { TicketItem } from '../index';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ITicket } from '../../types/tickets';
import { ETransfersActionTypes, TTransfersActions } from '../../types/transfers';

import styles from './ticketsList.module.scss';

const TicketsList = ({ quantitySlice }: { quantitySlice?: number | undefined }) => {
  const { tickets } = useTypedSelector((state) => state.ticketsReducer);
  const { activeSort } = useTypedSelector((state) => state.sortReducer);
  const { activeTransfers } = useTypedSelector((state) => state.transfersReducer);
  const dispatch: Dispatch<TTransfersActions> = useDispatch();
  const [visibleTickets, setVisibleTickets] = useState<[] | ITicket[]>([]);

  const onSortTickets = (sortValue: string, ticketsList: ITicket[]): ITicket[] => {
    const cloneTickets: ITicket[] | [] = JSON.parse(JSON.stringify(ticketsList));
    const sortByFast = (items: ITicket[]): ITicket[] => {
      return items.sort(({ segments: prevSegments }, { segments }) => prevSegments[0].duration - segments[0].duration);
    };
    const sortByCheapest = (items: ITicket[]): ITicket[] => {
      return items.sort(({ price: prePrice }, { price }) => prePrice - price);
    };
    switch (sortValue) {
      case 'fast':
        return sortByFast(cloneTickets);
      case 'optimal':
        return sortByCheapest(sortByFast(cloneTickets));
      default:
        return sortByCheapest(cloneTickets);
    }
  };

  const filterTickets = (ticketsList: ITicket[], filterValues: string[]): [] | ITicket[] => {
    if (!filterValues.length) return [];
    if (filterValues.length === 4) return ticketsList;
    return filterValues
      .map((valueFilter) => {
        return ticketsList.filter((ticketItem) => {
          switch (valueFilter) {
            case 'noTransfers':
              return ticketItem.segments[0].stops.length === 0 && ticketItem.segments[1].stops.length === 0;
            case 'oneTransfers':
              return ticketItem.segments[0].stops.length === 1 && ticketItem.segments[1].stops.length === 1;
            case 'twoTransfers':
              return ticketItem.segments[0].stops.length === 2 && ticketItem.segments[1].stops.length === 2;
            case 'threeTransfers':
              return ticketItem.segments[0].stops.length === 3 && ticketItem.segments[1].stops.length === 3;
            default:
              return ticketItem;
          }
        });
      })
      .flat(1);
  };

  useEffect(() => {
    const newTickets = filterTickets(onSortTickets(activeSort, tickets), activeTransfers);
    setVisibleTickets(() => {
      return newTickets;
    });
    dispatch({
      type: ETransfersActionTypes.ON_CHANGE_VISIBLE_TICKETS_LENGTH,
      payload: newTickets.length,
    });
  }, [tickets, activeSort, activeTransfers]);
  return (
    <>
      <ul className={styles.tickets}>
        {visibleTickets.slice(0, quantitySlice).map((ticket) => {
          const { carrier, segments, price } = ticket;
          return (
            <TicketItem
              key={ticket.carrier + ticket.price + JSON.stringify(segments)}
              segments={segments}
              price={price}
              carrier={carrier}
            />
          );
        })}
      </ul>
      {/*<button onClick={() => setValue((prevState) => prevState + 5)}>Еще 5</button>*/}
    </>
  );
};

export default TicketsList;
