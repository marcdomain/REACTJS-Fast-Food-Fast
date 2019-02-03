import React, { Component } from 'react';

class IntroWords extends Component {
  componentDidMount() {
    this.welcomeWords();
  }

  welcomeWords = () => {
    const words = [
      {
        word: 'Satisfy your tastes! Quench your hunger! <br>Place your orders and get it delivered at your convenience.'
      },
      {
        word: 'Our delicacies are outstanding. <br>The cheapest food item can get you back on your feet.'
      },
      {
        word: 'Our service is swift. <br>The restaurant is kept meticulously clean, comfortable and air-conditioned.'
      },
      {
        word: 'Order from a wide range of delicacies. <br><em>Local delicacies, Snacks, Rice, Turkey, and Others</em>.'
      }
    ];

    // open on window load (0 sec)
    const myQuotes = document.querySelector('.words');
    words.map((v, i, arr) => {
      if (myQuotes) {
        myQuotes.innerHTML = arr[Math.floor(Math.random() * arr.length)].word;
      }
      return false;
    });

    // start after 10 sec
    words.map((v, i, arr) => {
      if (myQuotes) {
        setInterval(() => {
          myQuotes.innerHTML = arr[Math.floor(Math.random() * arr.length)].word;
        }, 10000);
      }
      return false;
    });

    const bgColor = document.getElementById('progress-color');
    const progColor = document.getElementById('progress-color');
    let width = 1;
    // repeat every 10 sec
    setInterval(() => {
      if (width >= 100) {
        width = 1;
      } else {
        width += 1;
        if (progColor) {
          progColor.style.backgroundColor = '#52bad5';
        }
        if (bgColor) {
          bgColor.style.width = `${width}%`;
        }
      }
    }, 100);
  };

  render() {
    return (
      <div className="intro-words intro-content">
        <div className="words" />
        <div className="progress-bar">
          <div className="progress-color" id="progress-color" />
        </div>
      </div>
    );
  }
}

export default IntroWords;
