import React from 'react'
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'
import dt from 'datatables.net'

function Datatable(props) {
  const {
    config = {},
    data
  } = props

  const headings = getKeys(data)
  const table = React.createRef()

  const tableHeadings = headings.map(
    item => (<th>{item}</th>)
  )
  
  const tableBody = data.map(
    item => buildRow(item,headings)
  )

  React.useEffect(() => {
    const node = table.current
    dt.$(node).DataTable(config)
  }, [config, table])
  
  return (
    <>
      <table
        ref={table}
      >
        <thead>
          <tr>
            {tableHeadings}
          </tr>
        </thead>
        <tbody>
            {tableBody}
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