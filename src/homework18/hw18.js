import React, { useEffect, useState } from 'react';
import './hw18.css';
import Contact from './contact-constructor';
import CheckboxFilter from './filters';
import background from './background.png';
import contacts from './contacts';

function ContactList() {
    const [contactsArr, setContacts] = useState(contacts);
    const [search, setSearch] = useState('');
    const [contactsByGender, setContactsByGender] = useState(contacts);

    

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
        
        const filteredContacts = contactsByGender.filter(contact => {
            return Object.values(contact).some(item => 
                item.toString().search(regExp) >= 0
            );
        });

        setContacts(filteredContacts);

    }, [search, contactsByGender])

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
    
        setContactsByGender(filteredContacts);
    }

    return(
        <div className="inner_box_hw18">
            <img src={background} alt="background" className="inner_box_hw18_img"></img>
            <div className="container_hw18">
                <h2 className="title_hw18">Contacts</h2>
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