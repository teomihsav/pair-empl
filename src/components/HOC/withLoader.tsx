import React, { useEffect, useState } from 'react'

export const withLoader = (Component, url) => {

  return (props) => {
    const [data, dataSet] = useState(null)

    useEffect(() => {
      async function getData() {
        const res = await fetch(url)
        const data = await res.json();
        dataSet(data);
      }
      getData();
    }, [])

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Component {...props} data={data} />

  }
}