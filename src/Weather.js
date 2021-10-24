const Weather = ({ weather }) => {
  return (
    <div className="weather">
      {weather && (
        <>
          <h1 className="weatherTitle">
            {weather.name},{weather.sys.country}
          </h1>
          <p className="weatherDesc">{weather.weather[0].description}</p>
        </>
      )}
      <img src={`/img/${weather.weather[0].icon}.png`} alt="f" height="300px" width="300px" />
      <h1 className="weatherTemp">{Math.round(weather.main.temp)}°C</h1>
      <p className="weatherFeel">
        Feels like {weather.main.feels_like}
        °C
      </p>
    </div>
  );
};

export default Weather;
