const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  const arnieQuotesPromises = urls.map(async (url) => {
    const { status, body } = await httpGet(url);
    return status === 200
      ? { "Arnie Quote": `${JSON.parse(body).message}` }
      : { FAILURE: `${JSON.parse(body).message}` };
  });

  return Promise.all(arnieQuotesPromises);
};

module.exports = {
  getArnieQuotes,
};
