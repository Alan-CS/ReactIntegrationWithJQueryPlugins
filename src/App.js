// 2020-03-17 : Modified version of app from  https://reactjs.org/docs/integrating-with-other-libraries.html
// Use a checkbox to control the child(Chosen) component's children

import React, {useState, useRef} from 'react';
import './App.css';
import Chosen from "./Chosen";

const initCountries = ['USA', 'UK', "Nigeria", 'South Africa', 'Argentina'];

const hiddenCountries = ['Canada', 'Mexico', 'India', 'China'];

function App() {

    // Below code allows the Chosen jQuery Functionality to be disabled/reenabled
    const [isChosenEnabled, setChosen] = useState(true);
    const chosenEl = useRef(null);
    const changeChosen = (event) => {
        if (isChosenEnabled) {
            setChosen(false);
            chosenEl.current.destroyChosen();
        }
        else {
            setChosen(true);
            chosenEl.current.enableChosen();
        }
    }
    let buttonShowChosen;
    if ( isChosenEnabled ) {
        buttonShowChosen = <button onClick={() => changeChosen(false)}> Destroy Chosen </button>
    } else {
        buttonShowChosen = <button onClick={() => changeChosen(true)}> ReEnable Chosen </button>
    }


    const [countries, setCountries] = useState(initCountries);
    const [showHiddenCountries, setHiddenCountries] = useState(false);

    const handleShowHiddenCountriesChange = (event) => {
        const checked = event.target.checked;
        setHiddenCountries(checked);
        checked ? setCountries(initCountries.concat(hiddenCountries)) :
            setCountries(initCountries);
    }
    const component = (
        <div className="componentContainer">
            { buttonShowChosen }
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

    // Allows showing/hiding the entire component
    const [isShownComponent, setComponent] = useState(true);
    let button;
    if ( isShownComponent ) {
        button = <button onClick={() => setComponent(false)}> Hide Component </button>
    } else {
        button = <button onClick={() => setComponent(true)}> Show Component </button>
    }

    return (
        <div className="App">
            <p> A modified (more dynamic) version of the App in the
                <a href="https://reactjs.org/docs/integrating-with-other-libraries.html#integrating-with-jquery-chosen-plugin"> React
                    Documents on Integration with jQuery Plugins </a>
            </p>

            { button }
            {isShownComponent && component}
            {!isShownComponent && <p>The component is hidden. Click above button to show it again.</p>}

        </div>
    );
}

export default App;
