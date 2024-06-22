export const getBalance = (balance: number): Array<string> => {
  let data = balance.toFixed(2).split('.');
  return data;
};

export const fingNewSparklineRange = ({
  low,
  high,
}: {
  low: number;
  high: number;
}) => {
  let findSection = 5;
  let diff = Number(((high - low) / findSection).toFixed(3));
  let newLow = low - diff;
  let newHigh = high + diff;

  while (newLow + diff * findSection < newHigh) {
    findSection = findSection + 1;
  }

  return {
    yAxisOffset: newLow,
    stepValue: diff,
    noOfSections: findSection,
  };
};
