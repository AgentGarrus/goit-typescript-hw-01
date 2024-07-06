import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// Приклади використання функції fetchData
interface User {
  id: number;
  name: string;
  email: string;
}

(async () => {
  const userUrl = 'https://jsonplaceholder.typicode.com/users/1';
  try {
    const user = await fetchData<User>(userUrl);
    console.log(user);
  } catch (error) {
    console.error(error);
  }
})();