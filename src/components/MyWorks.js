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
            src={project.img}
            alt={project.name}
          />
        </div>
        <div className='card-content'>
          <span className='card-title activator deep-orange-text text-darken-3'>
            {project.name}
            <i className='material-icons right'>more_vert</i>
          </span>
          <p className='link'>
            <a href={project.url} rel="noopener noreferrer" target="_blank" className="gray" >App</a>
          </p>
          <p className='gray link'> | </p>
          <p className='link'>
            <a href={project.repo} rel="noopener noreferrer" target="_blank" className="gray">Repo</a>
          </p>
        </div>
        <div className='card-reveal'>
          <span className='card-title grey-text text-darken-4'>
          {project.name}<i className='material-icons right'>close</i>
          </span>
          <p>
            {project.description}
          </p>
        </div>
      </div>
      ))}


      
      
    </div>
  );
}
