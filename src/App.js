import './App.css'
import { species } from './species'

function getKeys(jsonCollection) {
  const allObjectsKeys = jsonCollection.map(
    singleSpecies => Object.keys(singleSpecies)
  )
  let uniqueKeys = [...new Set([].concat(...allObjectsKeys))];
  console.log(uniqueKeys)
  return uniqueKeys
}

function tableBodyRow(item,keys){
  console.log(item)
  console.log(keys)
  const rowContent = keys.map( key => <td> {item[key]}</td>)
  return <tr>
    {rowContent}
  </tr>
}

function App() {

  const tableHeadings = getKeys(species);
  
  return (
    <div>
      <table>
      <thead>
        <tr>
          { tableHeadings.map(item => (<th>{item}</th>)) }
        </tr>
      </thead>
      <tbody>
          { species.map(item => tableBodyRow(item,tableHeadings))}
      </tbody>
      </table>
    </div>
    
    )
  }
export default App;