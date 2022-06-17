import React from 'react'
import Btn from './components/Btn';
import Table from './components/Table';

function App() {
  return (
    <React.Fragment>
      <Btn text={'confirm'} cback={()=> console.log('.')} type={'confirm'} />
      <Btn text={'cancel'} cback={()=> console.log('.')} type={'cancel'} />
      <Btn text={'info'} cback={()=> console.log('.')} type={'info'} />
      <Table />
    </React.Fragment>
  );
}

export default App;
