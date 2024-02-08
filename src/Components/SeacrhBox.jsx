import { createQueryObject } from "../Helpers/Helper";
import {ImSearch} from 'react-icons/im'
import styles from "../Components/SearchSide.module.css"

// eslint-disable-next-line react/prop-types
function SeacrhBox( { setQuery , setSearch , search }) {

    const searchHandler = () => {
        setQuery((query) => createQueryObject (query, { search }));
      };

      
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search Here ..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SeacrhBox;
