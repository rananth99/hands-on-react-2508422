import { useState, useEffect } from "react";

const ListCast = () => {
  const [cast, setCast] = useState([]);

  async function fetchCast(){
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  return(
    <div style={{
      display: "grid", 
      gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
      gap: `1rem`,
      marginBottom: '1rem'
    }}>
      {cast.map(member => (
        <a key={member.id} data-tooltip={member.name}>
          <img key={member.id} src={`images/${member.slug}_tn.svg`} alt={member.name}/>
        </a>
      ))}
    </div>
  )
}

export default ListCast;