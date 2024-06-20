export const getBalance = (balance: number): Array<string> => {
  let data = balance.toFixed(2).split('.');
  return data;
};
