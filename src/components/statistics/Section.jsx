import React, { Component } from "react";
import PropTypes from "prop-types";
import { FeedbackOptions } from "./FeedbackOptions";

export class Section extends Component
{
    state = { title: "Please leave feedback" };

    render()
    {
        const { title } = this.state;

        return (
            <div>
                <h1 style={{ paddingTop: 40, textAlign: "center" }}>{title}</h1>
                <FeedbackOptions options={0} onLeaveFeedback={0}/>
            </div>
        );        
    }
}
Section.propTypes =
{
    title: PropTypes.string.isRequired
};