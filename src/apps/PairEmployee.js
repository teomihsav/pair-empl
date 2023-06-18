import React, { useState } from 'react'

import Papa from 'papaparse'
import { differenceInDays, parseISO, format } from 'date-fns';

const PairEmployee = () => {

  const [parsedData, setParsedData] = useState([])

  let arrayWithObjects = []
  let obj = {}
  
  for (let index = 0; index < 9; index++) {
    obj = { name: 'name ' + index, price: 10 + index }
    arrayWithObjects.push(obj)
  }
  arrayWithObjects.push({ name: 'name ' + 111, price: 10 })

  // console.log(arrayWithObjects)

  const totalPrice = arrayWithObjects.reduce((group, el) => {
    const price = el.price
    if (group[price] === undefined) group[price] = []
    // console.log('Total: ', group[price])
    group[price].push(el)
    return group
  }, {})

  // console.log('New array result: ', totalPrice)
  const objA = { a: 2, b: 1 }

  const test = (objA) => {
    return { ...objA, a: 0 }
  }
  test(obj)
  // const objB = { ...objA, a: 0 }
  // console.log('Obj result: ', test(objA))

  // const prom = new Promise((resolve, reject) => {
  //   let a = 1 + 1
  //   if (a == 1) {
  //     resolve('True...')
  //   } else {
  //     reject('False...')
  //   }
  // })

  // prom.then(res => console.log('Message:' + res)).catch(err => console.log('Error: ' + err))

  const handleFile = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setParsedData(results.data)
      },
    })
  }

  const dayOfWork = (startDate, endDate) => {
    if (endDate.toLowerCase() === 'null') {
      endDate = format(new Date(), 'yyyy-MM-dd')
    }
    return Math.abs(differenceInDays(parseISO(startDate), parseISO(endDate))) + 1
  }

  // console.log('Parsed Data: ', parsedData)

  const projectPerEmp = parsedData.reduce((acc, { EmpID, ProjectID, DateFrom, DateTo }) => {
    // console.log('Array: ', acc[ProjectID])

    const days = dayOfWork(DateFrom, DateTo)
    acc[ProjectID] = acc[ProjectID] ?? []
    acc[ProjectID].push({ EmpID: Number(EmpID), days })
    return acc
  }, {})

  const twoHighest = (arr) => {
    return arr.reduce((acc, item) => {
      return item > acc[1] ? [acc[1], item] : item > acc[0] ? [item, acc[1]] : acc
    }, [0, 0])
  }

  let res = []
  let ind = -1
  for (let proj in projectPerEmp) {
    if (projectPerEmp[proj].length < 2) { continue }
    ind++

    let days = []
    let emp = []
    let sum = 0
    projectPerEmp[proj].forEach((element, index) => {
      days[index] = element.days
    })
    days = twoHighest(days)

    projectPerEmp[proj].map((el) => {
      days.filter(elDays => {
        if (elDays === el.days) {
          sum = sum + el.days
          emp.push(el.EmpID)
        }
      })
    })
    res[ind] = { ...emp, 'projectID': proj, 'sum': sum }
  }

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFile} />
      <br />
      <table>
        <thead>
          <tr>
            {['Employee ID #1', 'Employee ID #2', 'Project ID', 'Days worked'].map((rows, index) => {
              return <th key={index} style={{ padding: '1rem' }}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {res.map((value, key) => {
            return (
              <tr key={key}>
                {Object.values(value).map((el, index) => <td key={index} style={{ padding: '1rem', textAlign: 'center' }}>{el}</td>)}
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}

export default PairEmployee