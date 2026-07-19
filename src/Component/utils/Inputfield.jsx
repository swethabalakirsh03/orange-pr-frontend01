import React from 'react';
import styles from '../Getintouch/Getintouch.module.scss';
const InputField = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    as = 'input',
    fullWidth = false,
    required = false,
}) => {
    const Tag = as;

    const fieldClass = [
        styles.field,
        as === 'textarea' ? styles.textarea : styles.input,
        fullWidth ? styles.fullWidth : '',
    ]
        .filter(Boolean)
        .join(' ');

    const extraProps = as === 'textarea' ? { rows: 4 } : { type };

    return (
        <Tag
            className={fieldClass}
            name={name}
            placeholder={label}
            aria-label={label}
            value={value}
            onChange={onChange}
            required={required}
            {...extraProps}
        />
    );
};

export default InputField;