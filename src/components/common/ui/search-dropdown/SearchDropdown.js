import React, { useCallback } from 'react';
import { Col, Form } from 'react-bootstrap';
import SelectSearch from 'react-select-search';

import './SearchDropdown.css';
import 'react-select-search/style.css';

const SearchDropdown = ({label, optionKey, optionValue, ...props}) => {
    const setOptions = useCallback(() => {
      return props.options ? props.options.map(o => ({ ...o, value: o[optionValue], name: o[optionKey] })) : []
    }, [props.options, optionKey, optionValue]);
    
    return (
        <Form.Group>
            <Col>
              <Form.Label className="form-label">
                  {label}
              </Form.Label>
            </Col>
            <Col>
              <SelectSearch 
                className="c-input-wrapper"
                placeholder={props.placeholder}
                multiple={props.multiple} 
                onChange={props.onChange}
                emptyMessage={props.emptyMessage}
                value={props.value}
                options={setOptions()}
                printOptions="auto"
                search={true}
              />
            </Col>
        </Form.Group>
    )
}  

export default SearchDropdown;