import React from 'react';
import profilePic from '../profile-left.png';

export default function AboutMe() {
  return (
    <div className='row'>
      <div className='col s4'>
        <img className='responsive-img' src={profilePic} alt='Luba Pecheneva' />
      </div>
      <div className='col s8'>
        <div>
          <h2>Hello!</h2>
          <h2>My name is Luba.</h2>
          <p>
            I am a full-stack Web Developer. My background includes working as
            an ESL teacher, office manager and international travel
            accommodations manager. I am currently employed by Russian School of
            Mathematics as an IT-Support specialist.
          </p>
        </div>
      </div>
    </div>
  );
}
