import { useState } from 'react';
import './Content.css';
import BarChart from './barchart/BarChart';
import LineChart from './linechart/LineChart';
import GeoChart from './geochart/GeoChart';

const Content = () => {
  const [type, setType] = useState('barChart')
  return (

    <div className="content">
      <div className='chart-title'><h1>Project Data Science and Visualization</h1></div>
      <div style={{ display: 'flex', marginTop: '2rem' }}>
        <div className='button-container'>
          <button onClick={() => setType('barChart')}>Bar chart</button>
          <button onClick={() => setType('lineChart')}>Line chart</button>
          <button onClick={() => setType('geoChart')}>Geo chart</button>
          <button onClick={() => setType('test3')}>Test</button>
        </div>
        <div className='interactive-view'>

          {type === 'barChart' && <BarChart type={type} />}
          {type === 'lineChart' && <LineChart type={type} />}
          {type === 'geoChart' && <GeoChart type={type} />}
        </div>
      </div>
    </div>
  );
};

export default Content;
