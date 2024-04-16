const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

const divide = (a: number, b: number): number => {
  return a / b;
};

const multiply = (a: number, b: number): number => {
  return a * b;
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
