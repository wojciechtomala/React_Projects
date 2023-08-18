import React from "react";
import PropTypes from 'prop-types';
import './Input.module.css';


const Input = ({ tag: Tag, name, label, maxLength, ...props}) => (
    <Tag

        required={name !== 'image'}
        name={name}
        placeholder={label}
        maxLength={maxLength}
        type="text"
        {...props}
    />
);

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number
}

Input.defaultProps = {
    tag: 'input',
    maxLength: null
}

export default Input;