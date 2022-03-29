import { useState, useEffect } from "react"

const useFetch = (url) => {

  const [data, setData] = useState([])
  const [isPending, setPending] = useState(true)
  const [logError, setLogError] = useState(null)

  useEffect ( () => {
    setTimeout( () => { 
     fetch(url)
     .then(res => {
      console.log(res)
       if(res.ok) {
         console.log(res)
        
         //setLogError(res.status)
         }
        // throw Error('Error fetching the Data')}
       return res.json()})
     .then(data => {
       setData(data)
       setPending(false)
     })
     .catch( err => {
       console.log(err)
       setPending(false)
       setLogError(err)
     })
   }, 1000)
   },[])

   return {data, isPending, logError}
}

export {useFetch}