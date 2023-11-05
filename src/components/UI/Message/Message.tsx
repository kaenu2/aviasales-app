import React from 'react';

import './message.scss';
import { EType, IProps, TType } from './type';

export const Message = ({ label, type, title }: IProps) => {
  const onCheckType = (value: TType): string => {
    switch (value) {
      case EType.warning:
        return 'warning';
      case EType.error:
        return 'error';
      default:
        return 'informational';
    }
  };

  const onRenderTitle = (chars: string): string => {
    return (
      chars
        .split('')
        .map((el, i) => (i === 0 ? el.toUpperCase() : el))
        .join('') + `${chars === 'informational' ? ' Notes' : ''}`
    );
  };

  const resultCheckType = onCheckType(type);

  return (
    <div className={`message-parent ${resultCheckType}`}>
      <h4 className="message-parent__title">{title ? title : onRenderTitle(resultCheckType)}</h4>
      <p className="message-parent__descr">{label}</p>
    </div>
  );
};
