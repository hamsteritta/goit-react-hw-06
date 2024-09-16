import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilter }) => {
 return (
    <div className={css.filter}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={evt => onFilter(evt.target.value)}
      />
    </div>
  );
}
export default SearchBox;