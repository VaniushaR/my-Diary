import { Card, Select, TextField, MenuItem, Button, FormHelperText, InputLabel} from '@material-ui/core'
import { useState, createRef } from 'react'

const NewEntry = () => {

  const [entry, setEntry ] = useState({})

  const [author, setAuthor] = useState("")

  //also add id
  const handleChange = (e) => {
    console.log(e)
    //const entryObject = {}
    const key = e.target.name
    setEntry({...entry, [key]: e.target.value})
    
    console.log(entry)
    
  }

  const handleAuthorSelection = (e) => {
    console.log(author)
    setAuthor(e.target.value)
    console.log(author)

  }

  const handleSubmit = () => {
    console.log(entry)
    const id = Math.ceil(Math.random()*1000).toString()
    const date = new Date().toLocaleString()
    setEntry({...entry, id: id, author: author, date: date })
    postRequest(entry)
  }

  const postRequest = (entry) => {
      //POST 
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(entry)
      }).then( () => {
        console.log('blog added', entry)
      })
      .catch( (error) => {
        console.log(error + ' has occured')
      })
  }

  //useRef()
  const nodeRef = createRef()

  return(
    <Card  >
      <h3>New entry</h3>
      <form  autoComplete="off" className="new-entry-card">
      <TextField required id="entry-title" label="Title" name="title" className="new-entry-input" onChange={(e) => handleChange(e) }/>
      <TextField required id="entry-subtitle" label="Subtitle" name="subtitle" className="new-entry-input" onChange={(e) => handleChange(e) } />
      <TextField required id="entry-content" label="Content" name="content" className="new-entry-input" variant="outlined" onChange={(e) => handleChange(e) } />
      <div className="new-entry-input">
      <InputLabel  className="select-new-entry" id="select-new-entry">Author</InputLabel>
        <Select  className="select-new-entry" labelId="Author"  ref={nodeRef}
          id="select-new-entry" placeholder="Author"
          onClick={(e) => {handleAuthorSelection(e)}} value={author} name="author"
        >
          <MenuItem  value="Vania R.">Vania R.</MenuItem>
          <MenuItem  value="Anonimous">Anonimous</MenuItem>
          <MenuItem  value="Unknown">Unknown</MenuItem>
        </Select>
          </div>
          <Button onClick={handleSubmit} className="new-entry-input">
            Submit
          </Button>
      
      </form>

    </Card>
  )
}

export {NewEntry}