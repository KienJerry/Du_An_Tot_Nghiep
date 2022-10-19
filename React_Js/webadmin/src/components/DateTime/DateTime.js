import moment from 'moment';

export const TIME = new Date().toLocaleTimeString();
export const DATE = new Date().toLocaleDateString();
export const DATE_TIME = new Date().toISOString();

export const disabledDate = (current) => {
    return current && current > moment().endOf('day');
  };