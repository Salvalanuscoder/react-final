import React from 'react'
import { useEffect, useState } from 'react' 


function FetchData({url, children, setLoading }) {
    const [data, setData] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch(url);
            setData(await res.json());
            setLoading(false);   
             
          }
          fetchData();
    }, [url]) 

  return (
    <>
        {children(data)}
    </>
  )
}

export default FetchData;