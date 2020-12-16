import './App.css'
import React from 'react'
import Datatable from './Datatable'
import { species } from './species'
import { films } from './films'

const config1 = {
  "scrollY": 200,
  "scrollX": true,
  "searching": true,
  "paging": false,
  "bInfo": false,
  "ordering": true,
  "sDom": 'lrtip',
}

const config2 = {
  
  "columnDefs": [
    {
        "targets": [ 2,3,6,7,8,9,10,11,12,13 ],
        "visible": false
    }
  ]
}

function App() {
  
  return (
    <>
      <Datatable
        config={config1}
        data={species}
      />
      <hr></hr>
      <Datatable
        config={config2}
        data={films}
      />
    </>
  )
}
export default App;