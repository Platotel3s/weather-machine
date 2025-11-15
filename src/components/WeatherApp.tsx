import React, { useState } from 'react';
import Search from './Search';
import WeatherInfo from './WeatherInfo';
import { fetchWeatherByCity } from '../api/weatherService';
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
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city: string) => {
    setLoading(true);
    try {
      console.log('Searching for weather data for city:', city);
      
      // Fetch actual weather data from API
      const response = await fetchWeatherByCity(city);
      console.log('Raw API response:', response);
      
      // Transform API response to match our WeatherData interface
      const transformedWeatherData: WeatherData = {
        city: response.name,
        temperature: Math.round(response.main.temp),
        description: response.weather[0].description,
        humidity: response.main.humidity,
        windSpeed: response.wind.speed,
        icon: response.weather[0].icon
      };
      
      console.log('Transformed weather data:', transformedWeatherData);
      setWeatherData(transformedWeatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('Error fetching weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-app">
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </div>
  );
};

export default WeatherApp;