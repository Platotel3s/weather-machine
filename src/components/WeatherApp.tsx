import React, { useState } from 'react';
import Search from './Search';
import WeatherInfo from './WeatherInfo';
import './WeatherApp.css';

interface WeatherData {
  city: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

const WeatherApp: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleSearch = async (city: string) => {
    // TODO: Replace this with actual API call
    // This is a mock API call
    const mockWeatherData: WeatherData = {
      city: city,
      temperature: 20,
      description: 'Sunny',
      humidity: 50,
      windSpeed: 5,
      icon: '01d'
    };
    
    setWeatherData(mockWeatherData);
  };

  return (
    <div className="weather-app">
      <Search onSearch={handleSearch} />
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </div>
  );
};

export default WeatherApp;