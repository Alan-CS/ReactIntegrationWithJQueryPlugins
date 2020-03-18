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

    const button = isShownComponent ? <button onClick={() => setComponent(false)}> Hide Component </button> :
        <button onClick={() => setComponent(true)}> Show Component </button>;

    const Component = isShownComponent ? <ChosenWrapper/> :
        <p>The component is hidden. Click above button to show it again.</p>;

    return (
        <div className="App">
            <h1>Integrating jQuery Plugins into a Modern React App</h1>
            <p> This is a modified (more dynamic) version of the App in the React
                Documents on
                <a href="https://reactjs.org/docs/integrating-with-other-libraries.html#integrating-with-jquery-chosen-plugin"> Integration with jQuery Plugins </a>.
                The purpose of this app is to display a picklist of countries using the jQuery&nbsp;
                <a href="https://harvesthq.github.io/chosen/"><b>Chosen</b></a> plugin.
            </p>
            <ul>
                <li>
                    Clicking the <b>Hide Component</b> button will cause the component to be unmounted, thereby calling the jQuery <b>off</b> and the chosen <b>destroy</b> events from the React componentWillUnmount lifecycle method . Clicking <b>Show Component</b> will mount the component again and the chosen plugin will re initialize once more with the help of the React componentDidMount lifecycle method.
                </li>
                <li>
                    Clicking the <b>Disable Chosen</b> button will cause the Chosen plugin to be destroyed and so the picklist of countries will default to it's native look and feel. Clicking the <b>Enable Chosen</b> will again cause the Picklist to be managed by the Chosen plugin. This is done by creating a ref on the Chosen component, thereby allowing the parent ChosenWrapper component to invoke methods on the Chosen component.
                </li>
                <li>
                    Clicking the <b>Show Hidden Countries</b> checkbox will cause the picklist of countries to change in the React component. React informs the Chosen component that the picklist has changed by triggering the jQuery <b>chosen:updated</b> event.
                </li>
                <li>
                    When the user selects a different country from the picklist, the Chosen plugin invokes a handleChange handler, thereby informing the parent React ChosenWrapper component of the change.
                </li>
            </ul>

            { button }
            { Component }

        </div>
    );
}

export default App;
