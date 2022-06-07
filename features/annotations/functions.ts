const add = (a: number, b: number): number => {
  return a + b;
};
function divide(a: number, b: number): number {
  return a + b;
}
const multiply = function (a: number, b: number): number {
  return a + b;
};
// нет return
const logger = (message: string): void => {
  console.log(message);
};
// функция не исполняется. Обычно не используется
const throwError = (message: string): never => {
  throw new Error(message);
};

const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

//Destructuring with annotations
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

logWeather(todaysWeather);
