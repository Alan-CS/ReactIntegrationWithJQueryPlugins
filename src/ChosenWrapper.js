import React, {useRef, useState} from "react";
import Chosen from "./Chosen";

const initCountries = ['USA', 'UK', "Nigeria", 'South Africa', 'Argentina'];
const hiddenCountries = ['Canada', 'Mexico', 'India', 'China'];

export default function ChosenWrapper() {

    // Below code allows the Chosen jQuery Functionality to be disabled/reenabled using a ref
    const [isChosenEnabled, setChosen] = useState(true);
    const chosenEl = useRef(null);
    const changeChosen = (event) => {
        if (isChosenEnabled) {
            setChosen(false);
            chosenEl.current.destroyChosen();
        } else {
            setChosen(true);
            chosenEl.current.enableChosen();
        }
    };

    const buttonShowChosen = isChosenEnabled ?
        <button onClick={() => changeChosen(false)}> Disable Chosen </button>
        :
        <button onClick={() => changeChosen(true)}> Enable Chosen </button>;

    const [countries, setCountries] = useState(initCountries);
    const [showHiddenCountries, setHiddenCountries] = useState(false);

    const handleShowHiddenCountriesChange = (event) => {
        const checked = event.target.checked;
        setHiddenCountries(checked);
        checked ? setCountries(initCountries.concat(hiddenCountries)) :
            setCountries(initCountries);
    };

    return (
        <div className="componentContainer">
            {buttonShowChosen}
            <div className="checkboxContainer">
                <span> Show Hidden Countries </span>
                <input
                    type="checkbox"
                    checked={showHiddenCountries}
                    onChange={handleShowHiddenCountriesChange}/>
            </div>
            <Chosen ref={chosenEl} onChange={value => console.log(`Selected country is ${value}`)}>
                {
                    countries.map((country, index) => <option key={index}> {country} </option>)
                }
            </Chosen>
        </div>
    );
}