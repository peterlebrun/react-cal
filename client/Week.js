import React from 'react';
import { WeekHeader } from './WeekHeader';
import { Day } from './Day';
import styles from './style.css';

export class Week extends React.Component {
  render() {
    return (
        <div className={styles.week}>
          <WeekHeader />
          <Day name="Monday" />
          <Day name="Tuesday" />
          <Day name="Wednesday" />
          <Day name="Thursday" />
          <Day name="Friday" />
          <Day name="Saturday" />
          <Day name="Sunday" />
        </div>
    );
  }
}
