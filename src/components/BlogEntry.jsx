import { useParams } from "react-router-dom"
import { useFetch } from "./customHooks/useFetch"
import {Card, CardContent, CardActions, Typography, IconButton} from "@material-ui/core"
import { EntryCard } from "./EntryCard"
import { makeStyles } from '@material-ui/core/styles';
import {appStyles} from './mui-useStyles';

const BlogEntry = () => {
  const {id} = useParams()
  const {data, isPending, logError} = useFetch('http://localhost:8000/blogs/' + id)
  console.log(data)
  const useStyles = makeStyles(appStyles)
  
  return(
    <div>
     <EntryCard useStyles={useStyles} blog={data}/>
    </div>
  )
}

export{BlogEntry}