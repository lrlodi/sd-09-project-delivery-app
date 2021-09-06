const URLBase = 'http://localhost:3001';

const getUsers = async (role) => {
  try {
    const URL = `${URLBase}/users/${role}`;
    const requestOptions = {
      mode: 'cors',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const request = await fetch(URL, requestOptions);
    const response = await request.json();
    return response;
  } catch (error) {
    const errorObj = {
      message: 'something bad happened here',
      error: error.message,
      status: 500,
    };
    console.log(errorObj);
  }
};

export default getUsers;
