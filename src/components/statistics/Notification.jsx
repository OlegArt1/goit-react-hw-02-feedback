import React, { Component } from "react";
import PropTypes from "prop-types";

export class Notification extends Component
{
    state = { message: "There is no feedback" };

    render()
    {
        const { message } = this.state;

        return (
            <div>
                <h3 style={{textAlign: "center", fontWeight: "500"}}>{message}</h3>
            </div>
        );
    }
}
Notification.propTypes =
{
    message: PropTypes.string.isRequired
};