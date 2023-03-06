import React from 'react'
import { Box } from '@mui/material/'
import {
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography
} from '@mui/material'

const AddAdmin = (props: any) => {
  //function to handle Back button
  const handleBackClick = () => {
    props.updateState(3)
  }

  return (
    <>
      <List>
        <ListItem>
          <ListItemText
            sx={{ color: '#898989', textDecoration: 'underline' }}
            secondary="Add Admin"
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              color: '#898989',
              textDecoration: 'underline',
              fontFamily: 'Roboto'
            }}
          >
            <Typography
              onClick={handleBackClick}
              variant="body2"
              color="#898989"
            >
              Back
            </Typography>
          </Box>
        </ListItem>
        <ListItem>
          <ListItemText primary="Please enter first name:" />
        </ListItem>
        <ListItem sx={{ pl: 5, pt: 0 }}>
          <TextField
            required
            multiline={true}
            maxRows={4}
            id="standard-basic"
            label="(Required)"
            sx={{ color: '#898989' }}
            variant="standard"
            inputProps={{ maxLength: 20 }}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Please enter last name:" />
        </ListItem>
        <ListItem sx={{ pl: 5, pt: 0 }}>
          <TextField
            required
            multiline={true}
            maxRows={4}
            id="standard-basic"
            label="(Required)"
            sx={{ color: '#898989' }}
            variant="standard"
            inputProps={{ maxLength: 20 }}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Please enter email:" />
        </ListItem>
        <ListItem sx={{ pl: 5, pt: 0 }}>
          <TextField
            required
            multiline={true}
            maxRows={4}
            id="standard-basic"
            label="(Required)"
            sx={{ color: '#898989' }}
            variant="standard"
            inputProps={{ maxLength: 100 }}
          />
        </ListItem>
      </List>
      <List className="bottom-buttons" disablePadding={true}>
        <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            className="menu-button"
            size="medium"
            variant="contained"
            color="primary"
          >
            Add Admin
          </Button>
        </ListItem>
        <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            className="menu-button"
            size="medium"
            variant="contained"
            color="primary"
            onClick={handleBackClick}
          >
            Cancel
          </Button>
        </ListItem>
      </List>
    </>
  )
}

export default AddAdmin
