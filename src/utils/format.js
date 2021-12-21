export const formatToHHmm = (minutes) => {
  const m = minutes % 60;
  const h = (minutes - m) / 60;
  return `${h.toString()}h:${m < 10 ? '0' : ''}${m.toString()}m`;
};

export const formatToUsCurrency = (amount) => amount?.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
}) || '$0.00';

export default null;
