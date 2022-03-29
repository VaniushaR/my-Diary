import {Container, Card, CardContent, CardActions, Typography, IconButton} from "@material-ui/core"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const EntryCard = ({useStyles, blog}) => {
  
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  return(

    <Card className={classes.root} >
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
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
               </CardActions>
             </Card>
              )
            
}

export {EntryCard}