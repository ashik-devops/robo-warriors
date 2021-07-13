import React from 'react';
const Card= ({id,name,email}) =>{
    return(
      <div className="tc bg-light-green br3 pa3 ma3 dib bw3 shadow-5 grow" >
          <img src={`https://robohash.org/${id}?200x200`} alt="robot"/>
          <h2>{name}</h2>
          <p>{email}</p>
      </div>
    );
}
export default Card;
