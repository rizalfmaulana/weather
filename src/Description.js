import Card from "./Card";
import { convertTime, getTime } from "./formula";

const Description = ({ search, setSearch, handleSearch, weather }) => {
  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return (
    <div className="description">
      <div className="descTitle">
        <span>
          {weekday[new Date(convertTime(weather.dt, weather.timezone).input).getUTCDay()]}, {parseInt(convertTime(weather.dt, weather.timezone)[0].split(":")[0])}:00
        </span>
        <input placeholder="Enter Your City..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} onKeyPress={handleSearch} />
        {/* <p>{getTime(weather.sys.sunset, weather.timezone)}</p> */}
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <Card title="Wind Speed" icon="img/wind.png" number={weather.wind.speed} unit="m/s" />
        </div>
        <div className="col-md-4 col-sm-12">
          <Card title="Visibility" icon="img/binocular.png" number={(weather.visibility / 1000).toPrecision(2)} unit="km" />
        </div>
        <div className="col-md-4 col-sm-12">
          <Card title="Humidity" icon="img/water.png" number={weather.main.humidity} unit="%" />
        </div>
        <div className="col-md-4 col-sm-12">
          <Card title="Sunrise" icon="img/sunrise.png" number={getTime(weather.sys.sunrise, weather.timezone)} />
        </div>
        <div className="col-md-4 col-sm-12">
          <Card title="Sunset" icon="img/sunset.png" number={getTime(weather.sys.sunset, weather.timezone)} />
        </div>
        <div className="col-md-4 col-sm-12">
          <Card title="Presure" icon="img/atm.png" number={weather.main.pressure} unit="hPa" />
        </div>
      </div>
    </div>
  );
};

export default Description;
