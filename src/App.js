import './App.css'
import { species } from './species'

function getKeys(jsonCollection) {
  const allKeys = jsonCollection.map(
    singleSpecies => Object.keys(singleSpecies)
  )
  let uniqueKeys = [...new Set([].concat(...allKeys))];
  return uniqueKeys
}

function buildRow(item,keys){
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
          { species.map(item => buildRow(item,tableHeadings))}
      </tbody>
      </table>
    </div>
  )
}
export default App;