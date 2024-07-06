type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, 'errors'>;

// Приклад використання типу Params
const params: Params = {
  email: 'user@example.com',
  firstName: 'John',
  lastName: 'Doe',
  phone: '1234567890',
};

console.log(params);

export default Params;