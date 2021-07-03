/* Example in Node.js ES6 using request-promise */

const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  /*uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',*/
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info',
  qs: {
    /*'id': '1',*/
    'slug': 'ethereum',
    'aux': 'urls,logo,description,tags,platform,date_added,notice,status'
  },
  headers: {
    'X-CMC_PRO_API_KEY': '4c7e47a4-6b36-4957-a57b-e732dae9cb44'
  },
  json: true,
  gzip: true
};

rp(requestOptions).then(response => {
  console.log('API call response:', response);
}).catch((err) => {
  console.log('API call error:', err.message);
});