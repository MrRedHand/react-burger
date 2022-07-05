import React, {FC, ReactNode} from "react";
import styles from './main-layout.module.css'

type TMainLayout = {
    children? : ReactNode;
}

export const MainLayout : FC<TMainLayout> = ({children}) => {
    return (
        <section className={styles.wrap}>
            {children}
        </section>
    )
}