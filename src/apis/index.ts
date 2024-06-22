import {create} from 'apisauce';
import {CoinData, MarketChart} from '../types';
import dayjs from 'dayjs';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const coinIds = [
  'usd-coin',
  'tether',
  'dai',
  'bitcoin',
  'matic-network',
  'solana',
  'cardano',
  'polkadot',
] as const;

const IDS = coinIds.join();

const endPoints = {
  coinMarkets: `/coins/markets?ids=${IDS}&vs_currency=usd&sparkline=true&precision=2`,
  marketChart: '/coins/bitcoin/market_chart/range?vs_currency=usd&',
};

const api = create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-sdVFeajmkhPcN3RbUT7RKsjN',
  },
});

export const fetchCoinList = async (): Promise<Array<CoinData>> => {
  try {
    const {data} = await api.get(endPoints.coinMarkets);
    return data as Array<CoinData>;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchBitcoinChart = async ({
  from = dayjs().subtract(3, 'M').unix(),
}: {
  from?: number;
}): Promise<MarketChart> => {
  try {
    const to = dayjs().unix();
    const {data} = await api.get(
      endPoints.marketChart + `from=${from}&to=${to}&precision=0`,
    );
    return data as MarketChart;
  } catch (error) {
    return Promise.reject(error);
  }
};
