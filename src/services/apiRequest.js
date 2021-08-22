const SEARCH_ID_URL = 'https://front-test.beta.aviasales.ru/search';
const SEARCH_TICKETS_URL = 'https://front-test.beta.aviasales.ru/tickets?searchId=';

async function request(url, options = {}, operations = 0) {
  let body;
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Url not found. Error status: ${response.status}`);
    }

    body = await response.json();
  } catch (error) {
    if (operations < 3) {
      return request(url, options, operations + 1);
    }

    throw new Error(`Error: ${error.message}`);
  }

  return body;
}

export const getSearchId = () => request(SEARCH_ID_URL);

export const getTickets = (searchId) => request(`${SEARCH_TICKETS_URL}${searchId}`);
