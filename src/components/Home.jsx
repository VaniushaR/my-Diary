import { useState, useEffect } from "react"
import {Blog} from './Blog'
import { makeStyles } from '@material-ui/core/styles';
import {Container, CircularProgress } from '@material-ui/core'
import {appStyles} from './mui-useStyles';
import { useFetch } from "./customHooks/useFetch";

const Home = () => {
  const {data: blogs, isPending, logError} = useFetch('http://localhost:8000/blogs')
  const useStyles = makeStyles(appStyles)

  //Delete Function
  const handleDelete = (id) => {
    console.log(id)
    const newBlogs = blogs.filter(blog => blog.id !== id
    )
    //setBlogs(newBlogs)
  }

  return (
    <>
      <div className="blog-feed">
        { isPending ? (<Container className="spinner-container">  
         
            <CircularProgress color="primary"/>
          
          </Container>) :
        ( logError ? (
          <Container className="spinner-container">  
         
            <h4>Un error conectando con el server ha ocurrido... {logError}</h4>
          
          </Container>
        ) : (
        
        <Blog blogs={blogs} useStyles={useStyles} handleDelete={handleDelete}/>))
        }
      </div>

      <div className="create-blog">Create</div>
    </>
  )
}

export {Home}