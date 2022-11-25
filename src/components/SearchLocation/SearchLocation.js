import { useState, useEffect } from 'react';
import axios from 'axios';
import {BiSearch} from 'react-icons/bi';
import './SearchLocation.css';

function SearchLocation(props) {
    const [location, setLocation] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);
    const [searches, setSearches] = useState([]);

    useEffect(() => {

      async function getData() {
          const response = await axios.get("https://weather-feather-app-backend.herokuapp.com/v1/posts");
          setData(response.data);
      }

      window.addEventListener("click", () => setSearches([]));

      getData();

      return () => {
          window.removeEventListener("click", () => setSearches([]));
      };

    }, []);
  
    function handleChange(event) {
        const text = event.target.value;
        const autoSearches = data.filter(obj => {
            return obj.city.toLowerCase().startsWith(text.toLowerCase()) && text !== "";
        });
        if (autoSearches.length > 8) {
            autoSearches.length = 8;
        }
        setInputValue(text);
        setLocation(text); 
        setSearches(autoSearches);
    }

    function handleSubmit(event) {
      if (location !== '') {
        props.handleSubmit(location);
        setLocation('');
      }
  
      event.preventDefault();
    }
  
    return (
      <form className="input-form">
        <div className="input-field">        
          <input 
            className="location-input"
            type="text"
            placeholder="City Name, Country Code"
            value={inputValue}
            onChange={handleChange}
          />
          <BiSearch onClick={handleSubmit} className="input-submit" />
        </div>
        <ul className="suggestion-list" >
          {searches.map((search, index) => {
            return (
              <li className="list-item" key={index} onClick={() => {
                setLocation(search.city + "," + search.country);
                setInputValue(search.city.replace(/,/g, ", ") + ", " + search.country);
              }}>{search.city.replace(/,/g, ", ") + ", " + search.country}</li>
            );
          })}
        </ul>
      </form>
    );
}

export default SearchLocation;