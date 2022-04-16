import React from "react";
import PropTypes from 'prop-types';
import styles from './overflow-section.module.css'

const OverflowSection = (props) => {
    return (
        <section style={{height : props.height}} className={`${styles.overflow_section} ${props.className}`}>
            {props.children}
        </section>
    )
}

OverflowSection.propTypes = {
    props: PropTypes.shape({
        height: PropTypes.number
    })
}

export default OverflowSection