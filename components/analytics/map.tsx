'use client';

import WorldMap from 'react-svg-worldmap';

const Map = () => {
  return (
    <WorldMap color='#baf4d9' title='' size='lg' data={data} />
  );
};

export default Map;

const data = [
  { country: 'ca', value: 1 }, // Canada
  // { country: 'in', value: 1311559204 }, // india
];
