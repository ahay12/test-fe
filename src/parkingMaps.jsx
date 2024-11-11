import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';
import useImage from 'use-image';
import { parkingData } from './parkingData';
import PropTypes from 'prop-types';

const availableImageSrc = '/available.png';
const occupiedImageSrc = '/occupied.png';

const ParkingMap = ({ onSelectSpot }) => {
  const [availableImage] = useImage(availableImageSrc);
  const [occupiedImage] = useImage(occupiedImageSrc);
  const [stageWidth, setStageWidth] = useState(window.innerWidth);
  const [stageHeight, setStageHeight] = useState(window.innerHeight);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = Math.min(window.innerWidth, 1280);
      const height = Math.min(window.innerHeight, 800);

      const newScale = width / 800;

      setStageWidth(width);
      setStageHeight(height);
      setScale(newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSpotClick = (spot) => {
    if (spot.available) {
      onSelectSpot(spot);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Stage
        width={stageWidth}
        height={stageHeight}
        scaleX={scale}
        scaleY={scale}
        style={{ border: '1px solid #ddd' }}
      >
        <Layer>
          {parkingData.map((spot) => (
            <React.Fragment key={spot.id}>
              <Image
                x={spot.x}
                y={spot.y}
                width={80}
                height={80}
                image={spot.available ? availableImage : occupiedImage}
                onClick={() => handleSpotClick(spot)}
                onTouchEnd={() => handleSpotClick(spot)}
                cursor={spot.available ? 'pointer' : 'not-allowed'}
              />
              <Text
                text={spot.number}
                x={spot.x + 27}
                y={spot.y + 37}
                fontSize={15}
                fill="black"
              />
            </React.Fragment>
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

ParkingMap.propTypes = {
  onSelectSpot: PropTypes.func.isRequired,
};

export default ParkingMap;
