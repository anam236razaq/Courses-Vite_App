import { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./Search.module.css";

export default function SearchBar({courses}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);

    const handleSearch = (query) => {
        const filtered = courses.filter(course => course.name.toLowerCase().includes(query.toLowerCase()));
        setFilteredItems(filtered)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchQuery)
    }
    const handleClearSearch = () => {
        setSearchQuery("");
        setFilteredItems([]);
    }
    return (
        <div className={styles.searchContainer}>
            <div id={styles.closeSearch} onClick={handleClearSearch}><i className="fi fi-rr-circle-xmark"></i></div>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <input type='text' placeholder='Search anything' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type='Submit'><i className="fi fi-rr-search"></i></button>
            </form>
            <div className={styles.searchResults}>
                 {filteredItems.map((course)=>(
                    <div className={styles.courseDetails} key={course.id}>
                      <div className={styles.courseImgs}>
                        <Link to={`/courses/${course.id}`}><img src={course.Img} alt={course.name}/></Link>
                        </div>
                      <div className={styles.courseCategory}>{course.category}</div>
                      <div className={styles.courseName}>{course.name}</div>
                      <hr />
                      <div className={styles.courseType}>{course.Type}</div>
                   </div>
               ))}
            </div>

        </div>
    )
}
