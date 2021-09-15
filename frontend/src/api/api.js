import axios from 'axios';

export const getFakeData = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    return response;
  } catch (error) {
    console.error(`error: ${error}`);
    return false;
  }
};
