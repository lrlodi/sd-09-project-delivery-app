const fetchURL = 'http://localhost:3001/';
const appJson = 'application/json';

const sales = async ({
  seller, totalPrice, deliveryAddress, deliveryNumber, products, token }) => {
  const body = JSON.stringify({
    seller,
    totalPrice,
    deliveryNumber,
    deliveryAddress,
    products,
  });

  return fetch(`${fetchURL}sales`, {
    method: 'POST',
    headers: {
      Accept: appJson,
      'Content-Type': appJson,
      Authorization: token,
    },
    body,
  }).then((response) => response.json());
};

export default sales;

export const saleById = async (id, token) => fetch(`${fetchURL}sales/${id}`, {
  method: 'GET',
  headers: {
    Accept: appJson,
    'Content-Type': appJson,
    Authorization: token,
  },
}).then((response) => response.json());