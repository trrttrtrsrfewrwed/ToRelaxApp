import React, { useState } from 'react';
import styles from "./index.module.css"

function TimeInput({onChange, value}) {
    const [prev_value, setPrevValue] = useState("");
    let checkCorrectness = (str) => {
        for (let i = 0; i < str.length; i++) {
            let sym = str.charAt(i)
            if (i === 2 && sym !== ':') {
                return false;
            }
            if (i !== 2 && (sym < '0' || sym > '9')) {
                return false;
            }
          }
        return true;  
    }

    const addHandler = (prev_value, setPrevValue, event) => {
        event.preventDefault();
        let value_ = event.target.value;
        if (!checkCorrectness(value_)) {
            event.target.value = prev_value
        } else {
            if (value_.length === 2) {
                if (prev_value.length < 2) {
                    value_ += ":";
                } else {
                    value_ = value_[0];
                }
            }
            if (value_.length > 4) {
                value_ = value_.substring(0, 5);
            }
            setPrevValue(value_);
            event.target.value = value_;
        }
    }
    return (
        <input
            placeholder="00:00"
            onInput={(event) => addHandler(prev_value, setPrevValue, event)}
            onChange = {onChange}
            value = {value}
            >
        </input>
    )
}

export default TimeInput;