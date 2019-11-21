import React from 'react';
import styles from './style.css';

export class Hour extends React.Component {
  render() {
    return (
        <div className={styles.hour}>
          {this.props.name}
        </div>
    );
  }
}
