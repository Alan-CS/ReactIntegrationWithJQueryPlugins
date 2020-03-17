// 2020-03-17 : Modified version of app from  https://reactjs.org/docs/integrating-with-other-libraries.html
// Use a checkbox to control the child(Chosen) component's children

import React, {useState} from 'react';
import './App.css';
import Chosen from "./Chosen";

const initCountries = ['USA', 'UK', "Nigeria", 'South Africa', 'Argentina'];

const hiddenCountries = ['Canada', 'Mexico', 'India', 'China'];

function App() {
    const [countries, setCountries] = useState(initCountries);
    const [showHidden, setHidden] = useState(false);

    const handleInputChange = (event) => {
        const checked = event.target.checked;
        setHidden(checked);
        checked ? setCountries(initCountries.concat(hiddenCountries)) :
            setCountries(initCountries);
    }

    return (
        <div className="App">
            <p> A modified (more dynamic) version of the App in the
                <a href="https://reactjs.org/docs/integrating-with-other-libraries.html#integrating-with-jquery-chosen-plugin"> React
                    Documents on Integration with jQuery Plugins </a>
            </p>

            <div className="componentContainer">
                <div className="checkboxContainer">
                    Show Hidden Countries
                    <input
                        type="checkbox"
                        checked={showHidden}
                        onChange={handleInputChange}/>
                </div>
                <Chosen onChange={value => console.log(`Selected country is ${value}`)}>
                    {
                        countries.map((country, index) => <option key={index}> {country} </option>)
                    }
                </Chosen>
            </div>
        </div>
    );
}

export default App;
