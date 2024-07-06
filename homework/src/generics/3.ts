function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

// Приклади використання функції merge
const obj1 = { name: 'Object1' };
const obj2 = { age: 30 };

const mergedObj = merge(obj1, obj2);
console.log(mergedObj);  // Output: { name: 'Object1', age: 30 }