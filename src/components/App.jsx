import { useEffect, useState } from "react";
import contacts from "../contacts.json";
import ContactList from "./ContactList/ContactList ";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";



const App = () => {

    const [contactsData, setContactsData] = useState(() => {
        const saveData = JSON.parse(window.localStorage.getItem('ContactsData'));
        return saveData ?? contacts;
    });

    useEffect(()=> {
        window.localStorage.setItem('ContactsData', JSON.stringify(contactsData));
    }, [contactsData]);

    const addContact = newContact  => {
        setContactsData(prev => {           
            return [...prev, newContact];
        });
    }

    const deleteContact = id => {
        setContactsData(prev => {
            return prev.filter(contact => contact.id !== id);
        });
    };

    const [filter, setFilter] = useState("");
    const filterContacts = contactsData.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (    
           <div>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={addContact} />
            <SearchBox filter={filter} onFilter={setFilter} />
            <ContactList contactsData={filterContacts} onDelete={deleteContact} />
            </div>        
    )
}

export default App