import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, selectedContacts } from "../../redux/contactsSlice";
import { selectedFilter } from "../../redux/filtersSlice";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectedContacts);
    const filter = useSelector(selectedFilter);

    const contactsData = contacts.filter(contact =>
        (contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.toLowerCase().includes(filter.toLowerCase()))
    );
    
    const handleDelete = id => {
        dispatch(deleteContact(id));
    };    

    return (
        <ul className={css.list}>
              {contactsData.map((contact) => {
                return <li key={contact.id}>
                    <Contact contact={contact} onDelete={handleDelete}></Contact>
                </li>;
            })}
        </ul>
    )
}
export default ContactList;