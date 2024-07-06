enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

// Приклади використання функції isWeekend
console.log(isWeekend(DayOfWeek.Monday));    // Output: false
console.log(isWeekend(DayOfWeek.Saturday));  // Output: true
console.log(isWeekend(DayOfWeek.Sunday));    // Output: true