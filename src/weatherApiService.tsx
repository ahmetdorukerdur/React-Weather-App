const API_KEY = '42b50aa43934d83a0bd96dc96cc7207a';
const iconURL = (iconId: any) => `http://openweathermap.org/img/wn/${iconId}04d@2x.png`;

const getWeatherData = async (city: any, units = 'metric') => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL).then((response) => response.json()).then((data) => data);
  
  const {weather, main: { temp, feels_like, temp_min, temp_max, pressure, humidity }, wind: {speed}, sys: {country}, name} = data;
  const {description, icon} = weather[0];
  
  return {
    description,
    iconURL: iconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};

export { getWeatherData };