import React from 'react';
import profilePic from '../profile-left.png';

export default function AboutMe() {
  return (
    <div className='row'>
      <div className='col s4 profile-pic my-bck'>
        <img src={profilePic} alt='Luba Pecheneva' />
      </div>
      <div className='col s8 my-bck profile-info'>
        <div>
          <h2>Hello!</h2>
          <h2>My name is Luba.</h2>
          <p>
            I am a full-stack Web Developer. My background includes working as
            an ESL teacher, office manager and international travel
            accommodations manager. I am currently employed by Russian School of
            Mathematics as an IT-Support specialist.
          </p>

          <a href="https://drive.google.com/file/d/1OPVKGyj6VVoVqoW1XLK7FAqksilMiNK-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="gray">Resume</a>
          <p className='gray link'> | </p>
          <a href="https://github.com/lp5786766" target="_blank" rel="noopener noreferrer" className="gray">GitHub</a>
        </div>
      </div>
    </div>
  );
}
