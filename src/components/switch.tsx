import React from 'react';
import {Switch as Sw} from 'react-native-switch';
import {scale} from 'react-native-size-matters';
import {palette} from '../theme';
import {SvgProps} from 'react-native-svg';
import {collapseState} from '../atoms';
import {useRecoilState} from 'recoil';

import {Icons} from '../assets';

const {CollapseIcon, ExpandIcon} = Icons;

export const Switch = () => {
  const [collapse, setCollapse] = useRecoilState(collapseState);

  const getIcon = React.useCallback(() => {
    const Icon: React.FC<SvgProps> = collapse ? CollapseIcon : ExpandIcon;

    return <Icon width={15} height={15} />;
  }, [collapse]);

  const onValueChange = () => {
    setCollapse(!collapse);
  };

  return (
    <Sw
      onValueChange={onValueChange}
      value={collapse}
      circleSize={scale(29)}
      activeText={''}
      inActiveText={''}
      barHeight={scale(32)}
      backgroundActive={palette.lightBlack}
      backgroundInactive={palette.lightBlack}
      circleActiveColor={palette.lightBlue}
      renderInsideCircle={getIcon}
      circleInActiveColor={palette.lightBlue}
      switchWidthMultiplier={2}
    />
  );
};
