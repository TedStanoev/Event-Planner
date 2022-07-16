import React from 'react';
import { Form } from 'react-bootstrap';
import SelectSearch from 'react-select-search';

import '../Forms/InputFormGroup/InputFormGroup.css';

const SearchDropdown = (props) => {
    const setOptions = () => {
        const { optionKey, optionValue } = props;
        return props.options.map(o => ({ ...o, value: o[optionValue], name: o[optionKey] }))
    }
    
    return (
        <React.Fragment>
            <Form.Label className="form-label" column sm="2">
                {props.label}
            </Form.Label>
            <SelectSearch 
                placeholder={props.placeholder}
                multiple={props.multiple} 
                onChange={props.onSelect}
                emptyMessage={props.emptyMessage}
                value={props.value}
                options={setOptions()}
                printOptions="on-focus"
                search
            />
        </React.Fragment>
    )
}  

export default SearchDropdown;