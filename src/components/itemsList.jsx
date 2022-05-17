import React from 'react';

function itemsList({ items }) {
  // console.log(props);
  // console.log("The Items list", items);

  return (
    <>{items ? items.map((item, index) => {
      return (
        <img src={`../images/items/${item.image}`} alt={item.name} key={index} className="itemImages" />
      )
    }) : null}</>
  );
}

export default itemsList;