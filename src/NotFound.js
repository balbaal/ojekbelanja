import React, { Component } from 'react';
import { Link } from 'react-router';

import Navigation from './Navigation';
import './css/NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="App-header">
          <h1>Ojek <i className="material-icons">motorcycle</i><i className="material-icons">loop</i> Nyasar</h1>
          <h3 className="header-error">404 | Page Not Found</h3>
        </div>
        <p className="App-intro">
          Maaf, halaman yang Anda tuju tidak ditemukan.
        </p>
        <p className="App-intro">
          Silakan kembali ke <Link to="/">halaman utama</Link>.
        </p>
      </div>
    );
  }
}

export default NotFound;
