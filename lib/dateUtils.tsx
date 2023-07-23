import dayjs from 'dayjs';

// 2023-06-21 -> 06 Jun, 2023
export const formatDate = (date: string) => {
  return dayjs(date).format('DD MMM, YYYY');
};

// 2023-06-21 -> '2023-06-21 '
export const formatDateFromDateToString = (date: any) => {
  return dayjs(date).format('YYYY-MM-DD');
};
