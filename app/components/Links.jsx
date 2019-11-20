import React from 'react';

const Links = (props) => {
  const links = props.links;
  const linksList = links.map((link) =>
    <li key={link.id}>
      <a href={link.link} target='_blank' rel='noopener noreferrer'>{link.site}</a>
    </li>
  );
  return (
    <div className="links">
      <ul>
        {linksList}
      </ul>
    </div>
  )
}

export default Links;
