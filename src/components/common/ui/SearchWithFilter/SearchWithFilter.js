import React from 'react';
import {
    Form,
    FormControl,
} from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

import './SearchWithFilter.css';

const SearchWithFilter = (props) => {
    return (
        <Form className="c-search-container">
          <FormControl 
            className="c-nav-search-bar"
            type="search"
            placeholder="Search"
          />
          <Search size={20} className="c-nav-search-icon "/>
        </Form>
    )
}

export default SearchWithFilter