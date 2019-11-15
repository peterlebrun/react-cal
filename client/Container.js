import React from 'react';
import { Header } from './Header';
import { Nav } from './Nav';
import { Body } from './Body';
import { Footer } from './Footer';
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
          <Header/>
          <Nav/>
          <Body/>
          <Footer/>
        </div>
    );
  }
}
