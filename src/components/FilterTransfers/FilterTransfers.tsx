import React, { Dispatch, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ETransfersActionTypes, TTransfersActions } from '../../types/transfers';
import { CheckBox } from '../UI';

import styles from './filterTransfers.module.scss';

const FilterTransfers: React.FC = () => {
  const { transfers, activeTransfers } = useTypedSelector((state) => state.transfersReducer);
  const dispatch: Dispatch<TTransfersActions> = useDispatch();

  useEffect(() => {
    dispatch({ type: ETransfersActionTypes.SET_ACTION_TRANSFERS });
  }, [transfers]);
  useEffect(() => {
    if (activeTransfers.length === 4) {
      dispatch({ type: ETransfersActionTypes.CHECK_TRANSFER, payload: 'all' });
    }
    if (activeTransfers.length < 4) {
      dispatch({ type: ETransfersActionTypes.UNCHECK_TRANSFER, payload: 'all' });
    }
  }, [activeTransfers.length]);

  const onChangeCheckBox = (id: string, state: boolean) => {
    if (id === 'all' && !state) {
      dispatch({ type: ETransfersActionTypes.ALL_TRANSFERS });
      return;
    }
    if (id === 'all' && state) {
      dispatch({ type: ETransfersActionTypes.NO_TRANSFERS });
      return;
    }
    if (!state) {
      dispatch({ type: ETransfersActionTypes.CHECK_TRANSFER, payload: id });
    } else {
      dispatch({ type: ETransfersActionTypes.UNCHECK_TRANSFER, payload: id });
    }
  };

  return (
    <div className={styles.transfers}>
      <h3 className={styles.transfers__title}>Количество пересадок</h3>
      <div className={styles.transfers__list}>
        {transfers.map((transfer) => {
          const { label, state, id } = transfer;
          return <CheckBox label={label} state={state} key={id} callback={() => onChangeCheckBox(id, state)} />;
        })}
      </div>
    </div>
  );
};

export default FilterTransfers;
