import React from 'react';
import { add } from 'date-fns';

import { ITicket } from '../../types/tickets';

import styles from './ticketItem.module.scss';

const TicketItem = ({ carrier, segments, price }: ITicket) => {
  const formDate = (date: Date) => {
    return {
      hours: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
      minutes: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
    };
  };

  const updatePriceVisible = (value: number) => {
    const priceStr = String(value).split('').reverse();
    return `${priceStr.filter((el, i) => i <= 2)} ${priceStr.filter((el, i) => i > 2)}`;
  };

  return (
    <li className={styles.ticket}>
      <div className={styles.ticket__top}>
        <p className={styles.ticket__price}>{updatePriceVisible(price)} Р </p>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt={carrier} height={36} width={100} />
      </div>
      <div className={styles.ticket__info}>
        {segments.map((segment) => {
          const { destination, origin, stops, duration, date } = segment;
          const { minutes, hours } = formDate(new Date(date));
          const { minutes: minutesDestination, hours: hoursDestination } = formDate(
            add(new Date(date), { minutes: Number(destination) })
          );
          const { minutes: minutesDuration, hours: hoursDuration } = formDate(new Date(duration * 60000));
          return (
            <div className={styles.ticket__value} key={origin + date + destination}>
              <div>
                <p className={styles.title}>
                  {origin} – {destination}
                </p>
                <span className={styles.value}>
                  {`${hours}:${minutes} – ${hoursDestination}:${minutesDestination}`}
                </span>
              </div>
              <div className={styles.center}>
                <p className={styles.title}>В пути</p>
                <span className={styles.value}>{`${hoursDuration}ч ${minutesDuration}м`}</span>
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
