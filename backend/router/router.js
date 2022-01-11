/* eslint-disable linebreak-style */
const URL = require('url');

const {
  GET_ESTONIA_DATA, GET_POLAND_DATA, GET_NETHERLANDS_DATA, GET_CANADA_DATA,
} = require('../constants/routes');
const {
  getEstoniaData, getPolandData, getNetherlandsData, getCanadaData,
} = require('../repositories/data.repository');

const router = async ({ req, res }) => {
  let result, error;
  const { method, url } = req;
  const { query, pathname } = URL.parse(url, true);

  switch (true) {
    case method === 'GET' && pathname === GET_ESTONIA_DATA:
      ({ result, error } = await getEstoniaData(query));
      break;
    case method === 'GET' && pathname === GET_POLAND_DATA:
      ({ result, error } = await getPolandData(query));
      break;
    case method === 'GET' && pathname === GET_NETHERLANDS_DATA:
      ({ result, error } = await getNetherlandsData(query));
      break;
    case method === 'GET' && pathname === GET_CANADA_DATA:
      ({ result, error } = await getCanadaData(query));
      break;
    default:
      res.statusCode = 404;
      return res.end(JSON.stringify({ error: 'Route Not Found' }));
  }

  if (error) {
    res.statusCode = error.status;
    return res.end(JSON.stringify({ error }));
  }
  res.statusCode = result.status;
  res.end(JSON.stringify(result.data));
};

module.exports = { router };
