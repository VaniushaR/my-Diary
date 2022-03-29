import { useState, useEffect } from "react"

const useFetch = (url) => {

  const [data, setData] = useState([])
  const [isPending, setPending] = useState(true)
  const [logError, setLogError] = useState(null)

  useEffect ( () => {
    setTimeout( () => { 
     fetch(url)
     .then(res => {
       if(!res.ok) {
         setLogError(res.status)}
        // throw Error('Error fetching the Data')}
       return res.json()})
     .then(data => {
       setData(data)
       setPending(false)
     })
     .catch( err => {
       console.log(err)
       setLogError(err)
     })
   }, 1000)
 
 
   },[])

   return {data, isPending, logError}
}

export {useFetch}