import React from 'react';
import {LineChart, LineChartPropsType} from 'react-native-gifted-charts';

export const Chart: React.FC<LineChartPropsType> = props => {
  const {...rest} = props;
  return (
    <LineChart
      areaChart
      isAnimated
      animationDuration={1000}
      hideDataPoints
      thickness={1}
      startOpacity={0.35}
      endOpacity={0.01}
      hideYAxisText
      hideAxesAndRules
      adjustToWidth
      onlyPositive
      overflowBottom={-10}
      {...rest}
    />
  );
};
