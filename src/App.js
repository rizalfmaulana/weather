import axios from "axios";
import { useEffect, useState } from "react";
import Description from "./Description";
import Weather from "./Weather";
import "./app.scss";

function App() {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState("london");

  const fetchApi = async () => {
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`);
      setWeather(data);
      setSearch("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (evt) => {
    if (evt.key === "Enter") {
      fetchApi();
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="wrapper">
      <div className="container custom">
        <div className="row">
          {typeof weather.main !== "undefined" && (
            <>
              <div className="col-md-4 col-sm-12">
                <Weather weather={weather} />
              </div>
              <div className="col-md-8 col-sm-12 right">
                <Description search={search} weather={weather} setSearch={setSearch} handleSearch={handleSearch} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
