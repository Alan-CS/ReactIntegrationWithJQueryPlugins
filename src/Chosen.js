import React from "react";

// Alan: Use the global jquery namespace to assign a $ shortcut to be used by React code below
const $ = window.$;

export default class Chosen extends React.Component {
    componentDidMount() {
        console.log("componentDidMount called... ");
        this.$el = $(this.el);
        this.$el.chosen();
        // Alan: Commenting out above orig code and instead using below line will still work
        // since a jQuery plugin returns the same selections
        // this.$el = $(this.el).chosen();

        this.handleChange = this.handleChange.bind(this);
        this.$el.on('change', this.handleChange);
    }

    componentDidUpdate(prevProps) {
        console.log("componentDidUpdate called... ");
        if (prevProps.children !== this.props.children) {
            this.$el.trigger("chosen:updated");
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount called... ");
        this.$el.off('change', this.handleChange);
        this.$el.chosen('destroy');
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div>
                <span>Select A Country</span>
                <div className="chosenContainer">
                <select className="Chosen-select" ref={el => this.el = el}>
                    {this.props.children}
                </select>
                </div>
            </div>
        );
    }
}