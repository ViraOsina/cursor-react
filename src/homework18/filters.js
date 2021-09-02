import React from 'react';

export default function CheckboxFilter (props) {
    return(
        <div className="filter_box">
            <label htmlFor="male">
                <input 
                    onChange={props.onChange} 
                    type="checkbox" 
                    id="male" 
                    name="male" 
                    value="male"
                ></input>
            Male</label>
            <label htmlFor="female">
                <input 
                    onChange={props.onChange} 
                    type="checkbox" 
                    id="female" 
                    name="female" 
                    value="female"
                ></input>
            Female</label>
            <label htmlFor="not_specified">
                <input 
                    onChange={props.onChange} 
                    type="checkbox" 
                    id="not_specified" 
                    name="not_specified" 
                    value="undefined"
                ></input>
           Not specified</label><br/><br/>

        </div>
    )
}