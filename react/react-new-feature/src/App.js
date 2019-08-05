import React, {useState} from 'react';
import './App.css';
import ConcurrentMode from './concurrent/index';
import Index from './lifeCycle-react15/index'
function App() {
  const [parentCount, setParentCount] = useState(0)
  return (
    <div >
      {/* <ConcurrentMode /> */}
      <Index/>
    </div>
  );
}

export default App;
