import _ from 'lodash';
export const base_url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://fe-test-pixiu233.vercel.app'; // https://v2ds.netlify.app

export const getRadialProgressList = _.memoize(async () => {
  const res = await fetch(base_url + `/api/radialProgressData`);
  return res.json();
});
export const getMikestonesList = _.memoize(async () => {
  const res = await fetch(base_url + `/api/mikes`);
  return res.json();
});
