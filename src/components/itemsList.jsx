import React from 'react';

function itemsList({ items }) {
  // console.log(props);
  // console.log("The Items list", items[0]);

  return (
    <>{items ? items.map((item, index) => {
      if (index === 33 || index === 34 || index === 41 || index === 42 || index === 46 || index === 47 || index === 61 || index === 63 || index === 98 || index === 105 || index === 124 || index === 126 || index === 128 || index === 138 || index === 140 || index === 141 || index === 159 || index === 162) {
        // console.log(item.name, "Was removed");
        return null;
      }

      return (
        <div className="itemgold" key={index}>
          <img src={`../images/items/${item.image}`} alt={item.name} className="itemImages" />
          <p>{item.gold !== "0" ? item.gold : "Free"}</p>
        </div>
      )
    }) : null}</>
  );
}

export default itemsList;