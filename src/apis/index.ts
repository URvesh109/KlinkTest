import {create} from 'apisauce';

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
};

const api = create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-sdVFeajmkhPcN3RbUT7RKsjN',
  },
});

export const fetchCoinList = async (): Promise<any> => {
  try {
    const rawData = await api.get(endPoints.coinMarkets);
    console.log('RawData', rawData.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

// const url =
//   'https://api.coingecko.com/api/v3/coins/solana/market_chart/range?vs_currency=usd&from=1718691270&to=1718777670&precision=0';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     'x-cg-demo-api-key': 'CG-sdVFeajmkhPcN3RbUT7RKsjN',
//   },
// };
