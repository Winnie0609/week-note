import dayjs from 'dayjs';

// 2023-06-21 -> 06 Jun, 2023
export const formatDate = (date: string) => {
  return dayjs(date).format('DD MMM, YYYY');
};
