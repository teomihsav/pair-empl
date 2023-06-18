import React, { useEffect, useState } from 'react'

const Search = () => {

  const arr = ['one', 'twoone', 'three']
  const [state, stateSet] = useState('')
  const [search, searchSet] = useState(arr)

  // useEffect(() => {
  //   // let res = arr.filter(el => el === state)
  //   let res = arr.filter(el => el.toLowerCase().indexOf(state.toLowerCase()) !== -1)
  //   searchSet(res)
  // }, [state])

  const searchFor = (e) => {
    if (e.target.value === '') {
      searchSet(arr)
      return
    }
    // stateSet(e.target.value)
    const res = arr.filter(el => el.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)
    console.log('Res: ', res)
    if (res.length > 0) {
      searchSet(res)
    } else {
      searchSet(['Nothing found'])
    }
  }

  return (
    <div>
      <input type='text' onChange={searchFor} />
      <div>
        {search && search.map(el => <div key={el}>{el}</div>)}
      </div>
    </div>
  )
}

export default Search