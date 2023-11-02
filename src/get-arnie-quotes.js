const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  const arnieQuotesList = [];
  // TODO: Implement this function.
  const arniePromises = urls.map((url) => httpGet(url));
  const responses = await Promise.all(arniePromises);
  for (const { status, body } of responses) {
    status === 200
      ? arnieQuotesList.push({ "Arnie Quote": `${JSON.parse(body).message}` })
      : arnieQuotesList.push({ FAILURE: `${JSON.parse(body).message}` });
  }
  // return results;
  return arnieQuotesList;
};

module.exports = {
  getArnieQuotes,
};
