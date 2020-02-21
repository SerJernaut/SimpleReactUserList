import React from "react";
import styles from './Spinner.module.css';

function Spinner (props){
    return <div className={styles.ldsRipple}>
        <div></div>
        <div></div>
    </div>

}

export default Spinner;