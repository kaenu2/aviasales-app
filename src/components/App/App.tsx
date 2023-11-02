import React, { useEffect, useState } from 'react';

import { FilterTransfers, Header, SortMenu, TicketsList } from '../index';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Button, Loader, Message } from '../UI';

import styles from './app.module.scss';

const App = () => {
  const { fetchTickets, fetchSearchId } = useActions();
  const { searchId, stop, isLoading, tickets } = useTypedSelector((state) => state.ticketsReducer);
  const { visibleTicketsLength } = useTypedSelector((state) => state.transfersReducer);
  const [visibleLoader, setVisibleLoader] = useState(true);
  const [quantityTicketsRender, setQuantityTicketsRender] = useState(5);

  useEffect(() => {
    fetchSearchId();
  }, []);

  useEffect(() => {
    if (searchId.length && !stop && !isLoading) {
      fetchTickets(searchId);
    }
  }, [searchId, stop, isLoading]);
  useEffect(() => {
    if (!isLoading && stop) {
      setVisibleLoader(false);
    }
  }, [isLoading, stop]);

  return (
    <div>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <FilterTransfers />
          <div className={styles.right}>
            <SortMenu />
            {visibleLoader && <Loader />}
            <TicketsList quantitySlice={quantityTicketsRender} />
            {visibleTicketsLength && tickets.length ? (
              <div className={styles['btn-parent']}>
                <Button
                  label={`Показать еще ${visibleTicketsLength < 5 ? visibleTicketsLength : 5} билетов!`}
                  type="primary"
                  callback={() => {
                    setQuantityTicketsRender((prevState) =>
                      visibleTicketsLength < 5 ? prevState + visibleTicketsLength : prevState + 5
                    );
                  }}
                />
              </div>
            ) : null}
            {!visibleTicketsLength && stop ? <Message label={'Билеты не найдены'} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
