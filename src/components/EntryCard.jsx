import {Card, CardContent, CardActions, Typography, IconButton, Avatar} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import author from '../assets/author.jpeg'
import {useNavigate} from 'react-router-dom'

const EntryCard = ({useStyles, blog}) => {
  
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  const navigate = useNavigate()
  //Delete Function
  const handleDelete = (id) => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/my-Diary/')
    })
  }

  return(

    <Card className={classes.root} >
               <CardContent>
               <Avatar alt={blog.author} src={author} />
               <Typography variant="subtitle1"> {blog.author}</Typography>
               <Typography variant="h5" component="h2">
                 {bull }{blog.title}{ bull}
               </Typography>
               <Typography  variant="subtitle2" className={classes.pos} color="textSecondary">
                {blog.subtitle}
               </Typography>
               <Typography variant="body2" component="p">
                {blog.content}
              
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
             </Card>
              )
            
}

export {EntryCard}