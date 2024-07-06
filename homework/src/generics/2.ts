type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
}

function compare<T extends Pick<AllType, keyof AllType>, U extends Pick<AllType, keyof AllType>>(
  top: T,
  bottom: U
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

// Приклади використання функції compare
const obj1 = {
  name: 'Object1',
  position: 1,
  color: 'red',
  weight: 50,
  extra: 'extra field 1',  // Додаткове поле, яке не належить AllType
};

const obj2 = {
  name: 'Object2',
  position: 2,
  color: 'blue',
  weight: 100,
  extra: 'extra field 2',  // Додаткове поле, яке не належить AllType
};

const result = compare(obj1, obj2);
console.log(result);  // Output: { name: 'Object1', color: 'red', position: 2, weight: 100 }