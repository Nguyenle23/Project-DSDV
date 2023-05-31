import { useState } from 'react';
import './Content.css';
import Chart from './chart/Chart';

const Content = () => {
  const [type, setType] = useState('bar')
  return (

    <div className="content">
      <div className='chart-title'><h1>Project Data Science and Visualization</h1></div>
      <div style={{ display: 'flex', marginTop: '2rem' }}>
        <div className='button-container'>
          <button onClick={() => setType('bar')}>Test</button>
          <button onClick={() => setType('test1')}>Test</button>
          <button onClick={() => setType('test2')}>Test</button>
          <button onClick={() => setType('test3')}>Test</button>
        </div>
        <div className='interactive-view'>

          {type === 'bar' && <Chart type={type} />}
          {type === 'test1' && <div style={{ display: 'flex', flexWrap: 'wrap' }}><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1><h1>cailon</h1></div>}
        </div>
      </div>
    </div>
  );
};

export default Content;
