import {Blog} from './Blog'
import { makeStyles } from '@material-ui/core/styles';
import {Container, CircularProgress } from '@material-ui/core'
import {appStyles} from './mui-useStyles';
import { useFetch } from "./customHooks/useFetch";
import { NewEntry } from "./newEntry";


const Home = () => {
  const {data: blogs, isPending, logError} = useFetch('http://localhost:8000/blogs')
  
  const useStyles = makeStyles(appStyles)
  
  return (
    <>
      <div className="blog-feed">
        { isPending ? (<Container className="spinner-container">  
         
            <CircularProgress color="primary"/>
          
          </Container>) :
        ( logError ? (
          <Container className="error-cont">  
         
            <h4> An error while trying to connect with server has occured.  </h4>
            <p>After cloning and installing this app, raise server:
              <code>npx json-server --watch data/db.json --port 8000</code>
            </p>
          
          </Container>
        ) : (
        
        <Blog blogs={blogs} useStyles={useStyles} />))
        }
      </div>

      <div className="create-blog new-entry">
        <NewEntry/>
      </div>
    </>
  )
}

export {Home}