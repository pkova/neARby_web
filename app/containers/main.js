import React, { Component } from 'react';
import Intro from '../components/intro';
import Search from '../components/search';
import Drop from '../components/drop';
import Stack from '../components/stack';
import Contact from '../components/contact';


export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      bgColor: '#26A69A',
      phoneScreen: '',
      mainContent: '',
      selectedPage: 'Intro'
    }
  }

  componentWillMount() {
    
  }

  _handleNav(direction) {
  let index;
  let options = {
    0: ['Intro', '#26A69A'],
    1: ['Search', '#1E88E5'],
    2: ['Drop', '#00ACC1'],
    3: ['Stack', '#5E35B1'],
    4: ['Contact', '#3949AB']
  }
  for (var key in options) {
    if (direction === 'Back') {
      index = (Number(key) - 1).toString();
    } else {
      index = (Number(key) + 1).toString();
    }
    if (options[key][0] === this.state.selectedPage && options[index] !== undefined) {
      this._handlePageChange(options[index][0], options[index][1]);
    }
  }
}

  _handlePageChange(page, color) {
    this.setState({selectedPage: page, bgColor: color});
    for (var i = 0; i < 7; i++) {
      let element = document.body.children[0].children[0].children[0].children[0].children[1].children[i];
      if (element.className !== page) {
        element.style.color = 'white';
      } else {
        element.style.color = '#CCC';
      }
    };
    document.body.style.backgroundColor = color;
  }

  render() {
    // partial logic
    let currentPage, phoneScreen;
    if (this.state.selectedPage === 'Intro') {
      currentPage = <Intro />;
      phoneScreen = 'http://www.phonecruncher.com/wordpress/wp-content/uploads/wpallimport/files/390583.gif';
    } else if (this.state.selectedPage === 'Search') {
      currentPage = <Search />;
      phoneScreen = 'http://66.media.tumblr.com/avatar_cf24d676af93_128.png';
    } else if (this.state.selectedPage === 'Drop') {
      currentPage = <Drop />;
      phoneScreen = 'https://upload.wikimedia.org/wikipedia/commons/5/55/Tesseract.gif';
    } else if (this.state.selectedPage === 'Stack') {
      currentPage = <Stack />;
      phoneScreen = 'http://66.media.tumblr.com/avatar_cf24d676af93_128.png';
    } else if (this.state.selectedPage === 'Contact') {
      currentPage = <Contact />;
      phoneScreen = 'https://upload.wikimedia.org/wikipedia/commons/5/55/Tesseract.gif';
    } else {
      <Intro />
    }
    return (
      <div>
      <div id='main'>
        <div className='overlay'>
          {currentPage}
          <p className='paginate'>
            <a className='back' href='#' onClick={this._handleNav.bind(this, 'Back')}>‹</a>
            <a className='Intro' href='#' onClick={this._handlePageChange.bind(this, 'Intro', '#26A69A')}>•</a>
            <a className='Search' href='#' onClick={this._handlePageChange.bind(this, 'Search', '#1E88E5')}>•</a>
            <a className='Drop' href='#' onClick={this._handlePageChange.bind(this, 'Drop', '#00ACC1')}>•</a>
            <a className='Stack' href='#' onClick={this._handlePageChange.bind(this, 'Stack', '#5E35B1')}>•</a>
            <a className='Contact' href='#' onClick={this._handlePageChange.bind(this, 'Contact', '#3949AB')}>•</a>
            <a className='forward' href='#' onClick={this._handleNav.bind(this, 'Forward')}>›</a>
          </p>
        </div>
      </div>
      <div className='iphone-container'>
        <img className='iphone' height='730' width='760' src='http://www.freeiconspng.com/uploads/iphone-png-1.png'/>
        <div className='demo'>
          <img className='screen-gif' src={phoneScreen}/>
        </div>
      </div>
      <div className='footer'></div>
      </div>
    )
  }
}