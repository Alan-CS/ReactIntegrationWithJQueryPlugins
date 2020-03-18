// 2020-03-17 : Modified version of app from  https://reactjs.org/docs/integrating-with-other-libraries.html
// 1. Use a checkbox to control the child(Chosen) component's children (countries)
// 2. Allow the jquery plugin component to be destroyed and re-enabled
// 3. Allow the entire component to be hidden and redisplayed

import React, {useState} from 'react';
import './App.css';
import ChosenWrapper from "./ChosenWrapper";

function App() {

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
            {isShownComponent && <ChosenWrapper/>}
            {!isShownComponent && <p>The component is hidden. Click above button to show it again.</p>}

        </div>
    );
}

export default App;
