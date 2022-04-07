import {Container, Card, CardContent, CardActions, Typography, IconButton} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";
import { EntryCard } from "./EntryCard";

const Blog = ({blogs, useStyles}) => {
  console.log(blogs)

  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <>
      <Container gap="0.5em" className={classes.cont}>
        
        { blogs.length  ? (
        blogs.map((blog) => {
          return(
            <Link to={blog.id} key={blog.id}>
              <EntryCard useStyles={useStyles} blog={blog}/>
             </Link> )})
            ) : (
              <Card>
               <CardContent>
                 <Typography variant="h3" component="h4">
                {bull } No more entries for now { bull}
                 </Typography>
               </CardContent>
              </Card>) 
            }
        </Container>

    </>
  )
}

export {Blog}