import React from 'react';
import Flat from './flat';

const Flatlist = (props) => {
  const { flats } = props;
  return (
    <div className="flat-list">
      {flats.map(flat => (<Flat
        img={flat.imageUrl}
        price={flat.price}
        description={flat.name}
        longitude={flat.lng}
        latitude={flat.lat}
        key={flat.name}
        selectedFlat={props.selectedFlat}
      />
      ))}
    </div>
  );
};

export default Flatlist;
