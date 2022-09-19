const API_KEY = "412883d1ec74e9a2b2746a2fc7fcd205";

export const getWaetherByCoords = async (
  LAT: number,
  LON: number
): Promise<any> => {
  const API_COORDS = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;

  const response = await fetch(API_COORDS);
  const data = await response.json();
  return data;
};

export const getWaetherBySearch = async (CITY: string): Promise<any> => {
  const API_CITY = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;

  const response = await fetch(API_CITY);
  const responseData = await response.json();

  return responseData;
};
