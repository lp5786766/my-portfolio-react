import React from 'react';
import profilePic from '../profile-left.png';


export default function AboutMe(props) {
  return (
  <div className="row">
      <div className="row introduction">
        <div className="col m5 s12" id="img-div">
          <img
            className="responsive-img"
            id="profile"
            src={profilePic}
            alt="Luba Pecheneva"
          />
        </div>
        <div className="col m7 s12">
          <h2>Hello!</h2>
          <h2>My name is Luba.</h2>
          <p>
            I am a full-stack Web Developer.
          </p>
          <p>
            My background includes working as an ESL teacher, office manager and
            international travel accommodations manager. I am currently employed
            by Russian School of Mathematics as an IT-Support specialist.
          </p>
        </div>
      </div>
  </div>
  );
}