import React, { Component } from "react";
import PropTypes from "prop-types";
import { Notification } from "./Notification";
import Css from "./Statistics.module.css";

export class Statistics extends Component
{
    state =
    {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0
    };
    constructor()
    {
        super();
        this.handleGood = this.handleGood.bind(this);
        this.handleNeutral = this.handleNeutral.bind(this);
        this.handleBad = this.handleBad.bind(this);
        this.countTotalFeedback = this.countTotalFeedback.bind(this);
        this.countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage.bind(this);
    }
    handleGood = () =>
    {
        for (let i = 0; i < 1; i += 1)
        {
            this.setState({ good: this.state.good + 1 });
        }
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };
    handleNeutral = () =>
    {
        for (let i = 0; i < 1; i += 1)
        {
            this.setState({ neutral: this.state.neutral + 1 });
        }
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };
    handleBad = () =>
    {
        for (let i = 0; i < 1; i += 1)
        {
            this.setState({ bad: this.state.bad + 1 });
        }
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };
    countTotalFeedback = () =>
    {
        this.setState(totalState =>
        {
            return { total: totalState.good + totalState.neutral + totalState.bad };
        });
    };
    countPositiveFeedbackPercentage = () =>
    {
        this.setState(percentageState =>
        {
            return { positivePercentage: 100 * percentageState.good / (percentageState.good === 0 && percentageState.neutral === 0 && percentageState.bad === 0 ? 100 : percentageState.good + percentageState.neutral + percentageState.bad) };
        });
    };
    render()
    {
        const { good, neutral, bad, total, positivePercentage } = this.state;

        return (
            <div>
                <div className={Css.block}>
                    <button className={Css['button']} type="button" onClick={this.handleGood}>Good</button>
                    <button className={Css['button']} type="button" onClick={this.handleNeutral}>Neutral</button>
                    <button className={Css['button']} type="button" onClick={this.handleBad}>Bad</button>
                </div>
                <div>
                    {good > 0 || neutral > 0 || bad > 0 || total > 0 || positivePercentage > 0 ?
                        (<div className={Css.block_text}>
                            <h2>Statistics</h2>
                            <div className={Css.block_span}>
                                <label className={Css.label}>Good:</label>
                                <span className={Css['span']}>{good};</span>
                            </div>
                            <div className={Css.block_span}>
                                <label className={Css.label}>Neutral:</label>
                                <span className={Css['span']}>{neutral};</span>
                            </div>
                            <div className={Css.block_span}>
                                <label className={Css.label}>Bad:</label>
                                <span className={Css['span']}>{bad};</span>
                            </div>
                            <div className={Css.block_span}>
                                <label className={Css.label}>Total:</label>
                                <span className={Css['span']}>{total};</span>
                            </div>
                            <div className={Css.block_span}>
                                <label className={Css.label}>Positive feedback:</label>
                                <span className={Css['span']}>{positivePercentage.toFixed()}%;</span>
                            </div>
                        </div>) : (<Notification message="" />
                    )}
                </div>
            </div>
        );
    }
}
Statistics.propTypes =
{
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};