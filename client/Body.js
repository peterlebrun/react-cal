import React from 'react';
import styles from './style.css';

export class Body extends React.Component {
    render() {
        return (
            <div className={styles.bodyContainer}>
                <div className={styles.body}>
                    Body
                </div>
            </div>
        );
    }
}
