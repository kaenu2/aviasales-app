import React from 'react';

import styles from './CheckBox.module.scss';
import { IProps } from './type';

export const CheckBox = ({ state, label, callback }: IProps) => {
  return (
    <label className={styles.label}>
      <input type="checkbox" checked={state} className={styles.input} onChange={callback} />
      <span className={styles.name}>{label}</span>
    </label>
  );
};
