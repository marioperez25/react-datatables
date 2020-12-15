import './App.css'
import React from 'react'
import Datatable from './Datatable'
import { species } from './species'

const config1 = {
  "scrollY": 400,
  "scrollX": true,
  "searching": true,
  "paging": false,
  "bInfo": false,
  "ordering": true,
  "sDom": 'lrtip',
}

function App() {
  
  return (
    <>
      <Datatable
        config={config1}
        data={species}
      />
      <Datatable
        config={config1}
        data={species}
      />
    </>
  )
}
export default App;