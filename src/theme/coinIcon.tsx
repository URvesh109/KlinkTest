import React from 'react';
import {Icons} from '../assets';
import {SvgProps} from 'react-native-svg';
import {scale} from 'react-native-size-matters';

const ICON_SIZE = 50;

const icons = {
  bitcoin: Icons.BTC,
  'usd-coin': Icons.USDC,
  tether: Icons.USDT,
  dai: Icons.DAI,
  'matic-network': Icons.MATIC,
  solana: Icons.SOL,
  cardano: Icons.ADA,
  polkadot: Icons.DOT,
};

export type IconName =
  | 'usd-coin'
  | 'tether'
  | 'dai'
  | 'bitcoin'
  | 'matic-network'
  | 'solana'
  | 'cardano'
  | 'polkadot';

type IconProps = {
  iconName: IconName;
  width?: number;
  height?: number;
};

export const CoinIcon = ({
  iconName,
  width = ICON_SIZE,
  height = ICON_SIZE,
}: IconProps) => {
  const Icon: React.FC<SvgProps> = icons[`${iconName}`];

  return <Icon width={scale(width)} height={scale(height)} />;
};
