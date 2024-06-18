import {coinIds} from '../apis';
import {palette} from '../theme';

export interface Sparkline {
  price: Array<number>;
}

export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: number | null;
  last_updated: string;
  sparkline_in_7d: Sparkline;
}

export interface CoinDerived {
  minTitle: string;
  expandTitle: string;
  expandDesc: string;
  color: string;
}

export type CoinIdsType = (typeof coinIds)[number];

export type CoinNames = {
  [key in (typeof coinIds)[number]]: CoinDerived;
};

export const coinNames: CoinNames = {
  bitcoin: {
    minTitle: 'Bitcoin',
    expandTitle: 'Bitcoin',
    expandDesc: 'BTC',
    color: palette.bitcoinColor,
  },
  'usd-coin': {
    minTitle: 'USD Coin',
    expandTitle: 'USDC',
    expandDesc: 'USD coin',
    color: palette.usdcColor,
  },
  tether: {
    minTitle: 'Tether',
    expandTitle: 'USDT',
    expandDesc: 'Tether',
    color: palette.usdtColor,
  },
  dai: {
    minTitle: 'DAI',
    expandTitle: 'DAI',
    expandDesc: 'DAI',
    color: palette.daiColor,
  },
  'matic-network': {
    minTitle: 'Polygon',
    expandTitle: 'MATIC',
    expandDesc: 'Polygon',
    color: palette.polygonColor,
  },
  solana: {
    minTitle: 'Solana',
    expandTitle: 'SOL',
    expandDesc: 'Solana',
    color: palette.solanaColor,
  },
  cardano: {
    minTitle: 'Cardano',
    expandTitle: 'ADA',
    expandDesc: 'Cardano',
    color: palette.cardanoColor,
  },
  polkadot: {
    minTitle: 'DOT',
    expandTitle: 'Polka DOT',
    expandDesc: 'DOT',
    color: palette.dotColor,
  },
};
