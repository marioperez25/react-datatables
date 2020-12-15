import './App.css'
import React from 'react'
import $ from 'jquery'
import dt from 'datatables.net'
import { species } from './species'

const datatableConfig = {
  "scrollY": 400,
  "scrollX": true,
  "searching": true,
  "paging": false,
  "bInfo": false,
  "ordering": true,
  "sDom": 'lrtip',
}

function getKeys(jsonCollection) {
  const allKeys = jsonCollection.map(
    singleSpecies => Object.keys(singleSpecies)
  )
  let uniqueKeys = [...new Set([].concat(...allKeys))];
  return uniqueKeys
}

function buildRow(item,keys){
  const rowContent = keys.map(key => <td > {item[key]}</td>)
  return <tr>
    {rowContent}
  </tr>
}

function App() {

  const tableHeadings = getKeys(species);

  React.useEffect( ()=>{
    dt.$('#datatable').DataTable(datatableConfig)
  } , [])
  
  return (
    <>
      <table id='datatable'>
      <thead>
        <tr>
          { tableHeadings.map(item => (<th>{item}</th>)) }
        </tr>
      </thead>
      <tbody>
          { species.map(item => buildRow(item,tableHeadings))}
      </tbody>
      </table>
    </>
  )
}
export default App;