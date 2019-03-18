import React, { Component, PureComponent, Fragment } from 'react';

const HelloWorld = React.createElement(
    "h1",
    { id: "helloWorld" },
    "Hello World! Task 1 within React Mentoring Programm"
);

const CreateElement = React.createElement(
    "li",
    { className: 'createElement' },
    "Component created by React.createElement"
);

function FunctionalComponent() {
    return <li>Component created by using function</li>
}

class SimpleComponent extends Component {
    render() {
        return (
            <li>Component created by React.Component</li>
        )
    }
}

class SimplePureComponent extends PureComponent {
    render() {
        return (
            <li>Component created by React.PureComponent</li>
        )
    }
}
class App extends Component {
    render() {
        return (
            <Fragment>
                {HelloWorld}
                {CreateElement}
                <SimpleComponent />
                <SimplePureComponent />
                <FunctionalComponent />
            </Fragment>
        )
    }
}

export default App;