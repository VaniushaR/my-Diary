import {Container, Card, CardContent, CardActions, Typography, IconButton} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const Blog = ({blogs, useStyles, handleDelete}) => {
  console.log(blogs)

  
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <>
      <Container gap="0.5em" className={classes.cont}>
        
        { blogs.length  ? (
        blogs.map((blog) => {
          return(
             <Card className={classes.root} key={blog.id}>
               <CardContent>
               <Typography variant="h5" component="h2">
                 {bull }{blog.title}{ bull}
               </Typography>
               <Typography className={classes.pos} color="textSecondary">
                {blog.description}
               </Typography>
               <Typography variant="body2" component="p">
                {blog.body}
               <br />
                 {'-------'}
               </Typography>
               </CardContent>
               <CardActions>
               <IconButton aria-label="edit" color="secondary" >
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => handleDelete(blog.id)}>
                  <DeleteIcon />
                </IconButton>
               </CardActions>
             </Card> )})
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