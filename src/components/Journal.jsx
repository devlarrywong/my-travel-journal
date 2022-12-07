import React from 'react';
import locationDot from '../assets/location-dot-solid.svg';
import data from '../data';

const Journal = (props) => {
  console.log(props);
  return (
    <div className="Journal__main-container">
      <div className="Journal__container default-font">
        <div className="Journal__image-container">
          <img className="Journal__image" src={props.imageUrl} />
        </div>
        <div className="Journal__details-container">
          <div className="Journal__location-container">
            <img className="Journal__location-image" src={locationDot} />
            <p className="Journal__location">{props.location}</p>
            <a
              href={props.googleMapsUrl}
              target="_blank"
              className="Journal__location-map"
            >
              View on Google Maps
            </a>
          </div>
          <h1 className="Journal__title">{props.title}</h1>
          <p className="Journal__date">
            {props.startDate} - {props.endDate}
          </p>
          <p className="Journal__description">{props.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Journal;
