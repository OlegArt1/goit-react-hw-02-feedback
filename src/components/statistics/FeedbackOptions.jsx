import React, { Component } from "react";
import PropTypes from "prop-types";
import { Statistics } from "./Statistics";

export class FeedbackOptions extends Component
{
    state =
    {
        options: 0,
        onLeaveFeedback: 0
    }
    render()
    {
        return (
            <div>
                <Statistics good={0} neutral={0} bad={0} total={0} positivePercentage={0}/>
            </div>
        );
    };
}
FeedbackOptions.propTypes =
{
    options: PropTypes.number.isRequired,
    onLeaveFeedback: PropTypes.number.isRequired
};