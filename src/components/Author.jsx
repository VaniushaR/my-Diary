import {Card, CardActions, CardMedia, CardContent, Button, Typography} from '@material-ui/core'
import author from '../assets/author.jpeg'

const Author = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="600"
        image={author}
        alt="Author"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Vania Ramírez
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Front-End Developer in love with React v17 and now excited that the v18 is here!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href="https://vaniushar.github.io/">See my portfolio</a></Button>
        <Button size="small"><a href="https://www.linkedin.com/in/vaniaramirezmx/">Check my LinkedIn</a></Button>
      </CardActions>
    </Card>
  )
}
export {Author}