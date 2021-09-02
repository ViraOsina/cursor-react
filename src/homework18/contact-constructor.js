import React from 'react';
import contact_icon from './contact-book.png';

const MALE_ICON = "https://image.flaticon.com/icons/png/512/1340/1340619.png";
const FEMALE_ICON = "https://image.flaticon.com/icons/png/512/866/866954.png";
const UNKNOWN_ICON = "https://image.flaticon.com/icons/png/512/984/984199.png";

export default function Contact(props) {
    function genderIcon () {
        return props.contact.gender === "male" ? <img src={MALE_ICON} alt="male_icon"/> : 
        props.contact.gender === "female" ? <img src={FEMALE_ICON} alt="female_icon"/> : 
        <img src={UNKNOWN_ICON} alt="male_icon"/>;
    }

    return(
        <div className="contact_box">
            <div className="content_box_user">
                <img src={contact_icon} className="user_hw18" alt="user"></img>
                <span>{`${props.contact.firstName} ${props.contact.lastName}`}</span>
                <span className="gender_icon_hw18"> {genderIcon()}</span> 
            </div>
            <p>{props.contact.phone}</p>
            
            <hr/>
        </div> 
    )
}