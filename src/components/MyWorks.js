import React from 'react';
import info from '../project-info.json';

export default function MyWorks() {
  console.log(info);
  return (
    <div className='photo-grid'>
      {info.map((project) => (
        <div className='card'>
        <div className='card-image waves-effect waves-block waves-light'>
          <img
            className='activator'
            id={project.id}
            // src='/assets/${project.id}.png'
            alt={project.name}
          />
        </div>
        <div className='card-content'>
          <span className='card-title activator grey-text text-darken-4'>
            {project.name}
            <i className='material-icons right'>more_vert</i>
          </span>
          <p className='link'>
            <a href='#'>App</a>
          </p>
          <p className='link'> | </p>
          <p className='link'>
            <a href='#'>Repo</a>
          </p>
        </div>
        <div className='card-reveal'>
          <span className='card-title grey-text text-darken-4'>
            Card Title<i className='material-icons right'>close</i>
          </span>
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        </div>
      </div>
      ))}


      
      
    </div>
  );
}
