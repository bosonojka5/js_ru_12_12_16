/**
 * Created by polinas on 26.12.2016.
 */
import React, { Component, PropTypes } from 'react'
import moment from 'moment';
import DayPicker, { DateUtils } from "react-day-picker";
import './style.css'

export default class DateTimePicker extends Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }
    state = {
        from: null,
        to: null,
    };
    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
    handleResetClick(e) {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    }

    componentWillUpdate() {
        console.log('---', this.state.from, this.state.to)
    }

    render() {
        const { from, to } = this.state;
        return (
            <div className="RangeExample">
                { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                { from && to &&
                <p>
                    You chose from { moment(from).format('L') } to { moment(to).format('L') }.
                    { ' ' }<a href="." onClick={ this.handleResetClick }>Reset</a>
                </p>
                }
                <DayPicker
                    numberOfMonths={ 2 }
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
            </div>
        );
    }
}
