import React, {useState} from "react";

const SearchForm = ({ onSearch }) => {
    const [location,  setLocation] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        onSearch(location);
        setLocation('');
    };

    return (
        <form onSubmit={handlesubmit}>
           
            <input 
            type="text"
            className="text"
            placeholder="Enter location"
            value={location}
            onChange={(e)=> setLocation(e.target.value)} />
            <button type="submit" className="btn" >Search</button>
        </form>
    );
};

export default SearchForm;