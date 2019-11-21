import React from 'react';
import { Hour } from './Hour';
import styles from './style.css';

export class WeekHeader extends React.Component {
    hourMap = [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00"
    ];

  render() {
    return (
        <div className={styles.weekHeader}>
          <div className={styles.title}></div>
          {[...Array(24).keys()].map((i) => <Hour key={i} name={this.hourMap[i]} />)}
        </div>
    );
  }
}
