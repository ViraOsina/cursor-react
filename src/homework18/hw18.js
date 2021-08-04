import React, { useEffect, useState } from 'react';
import './hw18.css'

const male = 'https://image.flaticon.com/icons/png/512/1340/1340619.png';
const female = 'https://image.flaticon.com/icons/png/512/766/766514.png';
const unknown = 'https://image.flaticon.com/icons/png/512/57/57108.png';
const user_icon = 'https://image.flaticon.com/icons/png/512/456/456212.png';

const contacts = [{
    id: 1,
    firstName: "Barney",
    lastName: "Stinson",
    phone: "+380956319521",
    gender: "male"
}, {
    id: 2,
    firstName: "Robin",
    lastName: "Scherbatsky",
    phone: "+380931460123",
    gender: "female"
}, {
    id: 3,
    firstName: "Unknown",
    lastName: "number",
    phone: "+380666666666"
}, {
    id: 4,
    firstName: "Lily",
    lastName: "Aldrin",
    phone: "+380504691254",
    gender: "female"
}, {
    id: 5,
    firstName: "Marshall",
    lastName: "Eriksen",
    phone: "+380739432123",
    gender: "male"
}, {
    id: 6,
    firstName: "Ted",
    lastName: "Mosby",
    phone: "+380956319521",
    gender: "male"
},{
    id: 7,
    firstName: "Tracy (The Mother)",
    lastName: "McConnell",
    phone: "+380976319521",
    gender: "female"
},{
    id: 8,
    firstName: "Victoria",
    lastName: "the baker girl",
    phone: "+380976589521",
    gender: "female"
},{
    id: 9,
    firstName: "The Captain",
    lastName: "do not pick up!",
    phone: "+380976589521",
    gender: "female"
}
];



function CheckboxFilter (props) {
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

function Contact(props) {
    return(
        <div className="contact_box">
            <div className="content_box_user">
                <img src={user_icon} className="user" alt="user"></img>
                <span>{`${props.contact.firstName} ${props.contact.lastName}`}</span>
                <img className="gender" src={props.contact.gender === "male" ? male : props.contact.gender === "female" ? female : unknown} alt="gender"></img>
            </div>
            <p>{props.contact.phone}</p>
            
            <hr/>
        </div> 
    )
}

function ContactList() {
    const [contactsArr, setContacts] = useState(contacts);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const inputs2 = document.querySelectorAll('input[type="checkbox"]');
        inputs2.forEach(input => {
            input.checked = true
        });
    }, [])

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    useEffect(() => {
        const regExp = new RegExp(search, 'gi');

        const filteredContacts = contacts.filter(contact => {
            return Object.values(contact).some(item => 
                item.toString().search(regExp) >= 0
            );
        });

        setContacts(filteredContacts);
    }, [search])

    const handleCheckbox = () => {
        const checkedInputs = document.querySelectorAll('input[type="checkbox"]:checked');
        let checkedBoxes = [];
    
        checkedInputs.forEach(input => {
                checkedBoxes.push(input.value)
        });
    
        const filteredContacts = contacts.filter(contact => {
            if (!contact.gender && checkedBoxes.includes("undefined")) {
                return true;
            }
            return checkedBoxes.includes(contact.gender);
        });
    
        setContacts(filteredContacts);
    }

    return(
        <div className="inner">
            <div className="container_hw18">
                <h2 className="title">Contacts</h2>
                <input 
                    className="search_input" 
                    placeholder="SEARCH" 
                    type="search" 
                    name="search" 
                    onChange={handleSearchChange} 
                    value={search}/>
                <CheckboxFilter onChange={handleCheckbox}/>
                {contactsArr.map(contact => 
                    <Contact key={contact.id} contact={contact}/>
                )}
            </div>
        </div>       
    ) 
}

export default ContactList;