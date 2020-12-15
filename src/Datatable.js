import './App.css'
import React from 'react'
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'
import dt from 'datatables.net'

function Datatable(props) {
  const {
    config,
    data
  } = props
  const headings = getKeys(data);
  const tableRef = React.createRef();

  React.useEffect(() => {
    const node = tableRef.current
    dt.$(node).DataTable(config)
  }, [config, tableRef])
  
  return (
    <>
      <table ref={tableRef}>
      <thead>
        <tr>
          { headings.map(item => (<th>{item}</th>)) }
        </tr>
      </thead>
      <tbody>
          { data.map(item => buildRow(item,headings)) }
      </tbody>
      </table>
    </>
  )
}

function getKeys(arraysOfJsons) {
    const allKeys = arraysOfJsons.map(
      json => Object.keys(json)
    )
    const uniqueKeys = [...new Set([].concat(...allKeys))];
    return uniqueKeys
}

function buildRow(item,keys){
    const rowContent = keys.map(
        key => <td>{item[key]}</td>
    )
    return <tr>
        {rowContent}
    </tr>
}

export default Datatable;