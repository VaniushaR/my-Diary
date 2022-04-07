import { useState, useEffect} from 'react'

const useFetch2 = (url) => {
  const [dataFetched, setDataFetched] = useState([])

  useEffect(() => {
    console.log("hook use effect se ejecutó")
    
   // fetch API > RIck & Morty
    fetch(url)
    .then((res) => res.json())
    .then((data) => {setDataFetched(data)
    
    })

    .catch((err) => console.log(err)) 
  }, [])

  console.log(dataFetched)
  return ([dataFetched ])

}

export {useFetch2}