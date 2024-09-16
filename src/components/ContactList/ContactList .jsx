import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({contactsData, onDelete}) => {

    return (
        <ul className={css.list}>
              {contactsData.map((contact) => {
                return <li key={contact.id}>
                    <Contact contact={contact} onDelete={onDelete}></Contact>
                </li>;
            })}
        </ul>
    )
}
export default ContactList;