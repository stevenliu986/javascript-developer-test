const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  const arnieQuotesList = [];
  // TODO: Implement this function.
  for (const url of urls) {
    const response = await httpGet(url);
    const { status, body } = response;
    if (status === 200) {
      arnieQuotesList.push({ "Arnie Quote": `${JSON.parse(body).message}` });
    } else {
      arnieQuotesList.push({ FAILURE: `${JSON.parse(body).message}` });
    }
  }
  // return results;
  return arnieQuotesList;
};

module.exports = {
  getArnieQuotes,
};
