import React, {FC} from "react";
import styles from './overflow-section.module.css'
import {TOverflowSection} from "../../utils/types";

const OverflowSection : FC<TOverflowSection> = ({height, children, onScroll, className}) => {
    return (
        <section style={{height : height}} className={`${styles.overflow_section} ${className}`} onScroll={onScroll}>
            {children}
        </section>
    )
}

export default OverflowSection