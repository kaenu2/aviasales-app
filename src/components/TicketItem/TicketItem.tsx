import React from 'react';

import { ITicket } from '../../types/tickets';

import styles from './ticketItem.module.scss';

const TicketItem = ({ carrier, segments, price }: ITicket) => {
  return (
    <li className={styles.ticket}>
      <div className={styles.ticket__top}>
        <p className={styles.ticket__price}>{price} Р </p>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt={carrier} height={36} width={100} />
      </div>
      <div className={styles.ticket__info}>
        {segments.map((segment) => {
          const { destination, origin, stops, duration, date } = segment;
          return (
            <div className={styles.ticket__value} key={origin + date + destination}>
              <div>
                <p className={styles.title}>
                  {origin} – {destination}
                </p>
                <span className={styles.value}>10:45 – 08:00</span>
              </div>
              <div className={styles.center}>
                <p className={styles.title}>В пути</p>
                <span className={styles.value}>{duration}</span>
              </div>
              <div>
                <p className={styles.title}>{stops.length ? stops.length : 'Без'} пересадки</p>
                <span className={styles.value}>{stops.join(', ')}</span>
              </div>
            </div>
          );
        })}
      </div>
    </li>
  );
};

export default TicketItem;
