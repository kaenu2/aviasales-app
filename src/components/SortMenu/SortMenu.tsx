import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TSortActions, ESortActionTypes } from '../../types/sort';
import { Button } from '../UI';

import styles from './sortMenu.module.scss';

const SortMenu = () => {
  const { sortMenu, activeSort } = useTypedSelector((state) => state.sortReducer);
  const dispatch: Dispatch<TSortActions> = useDispatch();
  const onCheckClassName = (id: number): 'brl' | 'brr' | 'brn' => {
    switch (id) {
      case 0:
        return 'brl';
      case sortMenu.length:
        return 'brr';
      default:
        return 'brn';
    }
  };

  return (
    <div className={styles['sort-menu']}>
      {sortMenu.map((button, i) => {
        const { label, id, value } = button;
        return (
          <Button
            key={id}
            label={label}
            borderStyles={onCheckClassName(i)}
            type={activeSort === value ? 'primary' : undefined}
            callback={() => dispatch({ type: ESortActionTypes.ON_CHANGE_ACTION_SORT, payload: value })}
          />
        );
      })}
    </div>
  );
};

export default SortMenu;
