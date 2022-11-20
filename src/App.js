import React, { useEffect, useState } from 'react'

import Papa from 'papaparse'
import { differenceInDays, parseISO, format } from 'date-fns';

import './App.css'

const DUMMY_DATA = [
  { EmpID: 143, ProjectID: 12, DateFrom: '2013-11-01', DateTo: '2014-01-05' },
  { EmpID: 333, ProjectID: 12, DateFrom: '2013-11-01', DateTo: '2014-01-06' },
  { EmpID: 218, ProjectID: 10, DateFrom: '2012-05-16', DateTo: 'null' },
  { EmpID: 143, ProjectID: 10, DateFrom: '2009-01-01', DateTo: '2011-04-28' },
  { EmpID: 145, ProjectID: 10, DateFrom: '2009-01-01', DateTo: '2011-04-27' },
  { EmpID: 146, ProjectID: 10, DateFrom: '2009-01-01', DateTo: '2011-04-29' },
  { EmpID: 145, ProjectID: 11, DateFrom: '2009-01-01', DateTo: '2011-04-29' },
]

function App() {

  const [parsedData, setParsedData] = useState([])

  const handleFile = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setParsedData(results.data)
        console.log('ParsedData: ', results.data)
      },
    })
  }

  const dayOfWork = (startDate, endDate) => {
    if (endDate.toLowerCase() === 'null') {
      endDate = format(new Date(), 'yyyy-MM-dd')
    }
    return Math.abs(differenceInDays(parseISO(startDate), parseISO(endDate))) + 1
  }

  const projectPerEmp = parsedData.reduce((acc, { EmpID, ProjectID, DateFrom, DateTo }) => {
    const days = dayOfWork(DateFrom, DateTo)
    console.log('Days :', days)
    acc[ProjectID] = acc[ProjectID] ?? []
    acc[ProjectID].push({ EmpID: Number(EmpID), days })
    return acc
  }, {})

  const twoHighest = (arr) => {
    return arr.reduce((acc, rec) => {
      return rec > acc[1] ? [acc[1], rec] : rec > acc[0] ? [rec, acc[1]] : acc
    }, [0, 0])
  }
  console.log('REsult Reducer: ', projectPerEmp)

  let res = []
  let ind = -1
  for (let proj in projectPerEmp) {
    if (projectPerEmp[proj].length < 2) { continue }
    ind++

    // console.log('Element days: ', projectPerEmp[proj])
    let days = []
    let emp = []
    let obj = {}
    let sum = 0
    projectPerEmp[proj].forEach((element, index) => {
      days[index] = element.days
    })
    days = twoHighest(days)

    obj = {
      emp,
      days
    }
    // console.log('Arr: ', obj)
    projectPerEmp[proj].map((el, index) => {
      // console.log('el.EmpID: ', el.EmpID, el.days)
      days.filter(elDays => {
        if (elDays === el.days) {
          // console.log('el.EmpID: ', el.EmpID, el.days)
          sum = sum + el.days
          emp.push(el.EmpID)
        }
      })
      // console.log('Sum: ', sum)
    })
    res[ind] = { ...emp, 'projectID': proj, 'sum': sum }
  }
  console.log('Res Obj: ', res)

  return (
    <div>

      <header className="App-header">
        <input type="file" accept=".csv" onChange={handleFile} />
        <br />

        <table>
          <tr>
            {['Employee ID #1', 'Employee ID #', 'Project ID', 'Days worked'].map((rows, index) => {
              return <th key={index} style={{ margin: '1rem' }}>{rows}</th>;
            })}
          </tr>
          {res.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value[0]}</td>
                <td>{value[1]}</td>
                <td>{value.projectID}</td>
                <td>{value.sum}</td>
              </tr>
            )
          })}
        </table>

      </header>
    </div>
  )
}

export default App
