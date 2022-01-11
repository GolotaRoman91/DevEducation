/* eslint-disable linebreak-style */
const axios = require('axios');

exports.getEstoniaData = async () => {
  try {
    const estoniaData = await axios.get('https://api.adzuna.com/v1/api/jobs/es/histogram?app_id=4096e35d&app_key=06a286d8ef272b6786e474f17649fe41&content-type=application/json');
    return { result: estoniaData };
  } catch (e) {
    return { error: e.message };
  }
};
exports.getPolandData = async () => {
  try {
    const polandData = await axios.get('https://api.adzuna.com/v1/api/jobs/pl/histogram?app_id=4096e35d&app_key=06a286d8ef272b6786e474f17649fe41&content-type=application/json');
    return { result: polandData };
  } catch (e) {
    return { error: e.message };
  }
};
exports.getNetherlandsData = async () => {
  try {
    const netherlandsData = await axios.get('https://api.adzuna.com/v1/api/jobs/nl/histogram?app_id=4096e35d&app_key=06a286d8ef272b6786e474f17649fe41&content-type=application/json');
    return { result: netherlandsData };
  } catch (e) {
    return { error: e.message };
  }
};
exports.getCanadaData = async () => {
  try {
    const canadaData = await axios.get('https://api.adzuna.com/v1/api/jobs/ca/histogram?app_id=4096e35d&app_key=06a286d8ef272b6786e474f17649fe41&content-type=application/json');
    return { result: canadaData };
  } catch (e) {
    return { error: e.message };
  }
};
