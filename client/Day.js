import React from 'react';
import { Hour } from './Hour';
import styles from './style.css';

export class Day extends React.Component {
  render() {
    return (
        <div className={styles.day}>
          <div className={styles.title}>{this.props.name}</div>
          {[...Array(24).keys()].map((i) => <Hour key={i} />)}
        </div>
    );
  }
}
