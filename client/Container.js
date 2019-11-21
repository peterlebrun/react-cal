import React from 'react';
import { Week } from './Week';
import styles from './style.css';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div className={styles.container}>
          <Week />
        </div>
    );
  }
}
