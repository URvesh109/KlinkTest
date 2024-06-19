import React from 'react';
import {LineChart, LineChartPropsType} from 'react-native-gifted-charts';
import {scale} from 'react-native-size-matters';

export const Chart: React.FC<LineChartPropsType> = props => {
  const {color, startFillColor, endFillColor} = props;
  return (
    <LineChart
      areaChart
      data={ptData}
      isAnimated
      animationDuration={1000}
      hideDataPoints
      color={color}
      thickness={1}
      startFillColor={startFillColor}
      endFillColor={endFillColor}
      startOpacity={0.35}
      endOpacity={0.01}
      hideYAxisText
      hideAxesAndRules
      height={scale(80)}
      adjustToWidth
      onlyPositive
      overflowBottom={-5}
    />
  );
};

const ptData = [
  {value: 40},
  {value: 140},
  {value: 145},
  {value: 160},
  {value: 200},
  {value: 220},
  {value: 280},
  {value: 260},
  {value: 340},
  {value: 385},
  {value: 280},
  {value: 390},
  {value: 280},
  {value: 190},
  {value: 180},
  {value: 140},
  {value: 145},
  {value: 160},
  {value: 200},
  {value: 220},
  {value: 280},
  {value: 260},
  {value: 340},
  {value: 385},
  {value: 280},
  {value: 390},
  {value: 280},
  {value: 190},
  {value: 180},
  {value: 140},
  {value: 145},
  {value: 160},
  {value: 200},
  {value: 220},
  {value: 280},
  {value: 260},
  {value: 340},
  {value: 385},
  {value: 280},
  {value: 390},
  {value: 370},
  {value: 285},
  {value: 295},
  {value: 300},
  {value: 280},
  {value: 295},
  {value: 260},
  {value: 255},
  {value: 190},
  {value: 220},
  {value: 205},
  {value: 230},
  {value: 210},
  {value: 200},
  {value: 240},
  {value: 350},
  {value: 380},
  {value: 350},
  {value: 310},
];
