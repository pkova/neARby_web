import React, { Component } from 'react';

let Stack = () => {
  return (
    <div className='details'>
      <h1>technologies used</h1>
      <p>This iOS application was built in React-Native, Redux, Three.js, AWS S3, Node, Express, and Redis.</p>
      <p>Facebook, Google, Flickr and Eventful APIs were used in the process.</p>
      <div className='apis'>
        <img height='50' width='50' src='app/assets/react-native.png'/>
        <img height='50' width='50' src='app/assets/redis.png'/>
        <img height='50' width='50' src='app/assets/node.png'/>
        <img height='50' width='50' src='app/assets/threejs.jpg'/>
        <img height='50' width='62' src='app/assets/aws.png'/>
        <img height='50' width='53' src='app/assets/redux.png'/>
      </div>
      <div className='apis'>
        <img height='50' width='50' src='app/assets/eventful.png'/>
        <img height='50' width='50' src='app/assets/google.png'/>
        <img height='50' width='50' src='app/assets/facebook.png'/>
        <img height='50' width='50' src='app/assets/flickr.png'/>
      </div>
      <p><a href='app/assets/nearby-architecture.png'>Take a look at the application's architecture,</a> or</p>
      <p><a href='https://github.com/CalculatingPineapples/neARby'>view the repository here</a>.</p>
    </div>
  );
}

export default Stack;