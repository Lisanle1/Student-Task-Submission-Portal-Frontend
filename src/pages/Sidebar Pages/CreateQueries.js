import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AttachmentButton,
  CancelButton,
  CreateButton,
  CustomPaper,
  CustomPaper3,
  QueryButton,
} from '../../components/CustomComponents'

import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { CustomTypography } from './Admin'
import { ColorButton } from '../Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { createQuery } from '../../redux/actions/Queries'

const CreateQueries = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [queryData, setQueryData] = useState({
    category: '',
    language: '',
    title: '',
    description: '',
    starttime: '',
    endtime: '',
  })

  //   Modal States Starts
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  //   Modal States Ends

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(queryData)
    dispatch(createQuery(queryData))
    handleClickOpen()
  }
  return (
    <Grid
      container
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <CustomPaper3>
          <QueryButton onClick={() => navigate('/queries')}>Back</QueryButton>
        </CustomPaper3>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={8} mt={2}>
        <CustomPaper sx={{ p: 3 }}>
          <Grid>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography>Topic</Typography>
                <Grid
                  container
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                    <CustomTypography>Category</CustomTypography>
                    <TextField
                      select
                      fullWidth
                      value={queryData.category}
                      label="Category"
                      onChange={(e) =>
                        setQueryData({
                          ...queryData,
                          category: e.target.value,
                        })
                      }
                      sx={{ width: '310px' }}
                    >
                      <MenuItem value="Zen-Class Doubt">
                        Zen-Class Doubt
                      </MenuItem>
                      <MenuItem value="Placement Related">
                        Placement Related
                      </MenuItem>
                      <MenuItem value="Coordination Related">
                        Coordination Related
                      </MenuItem>
                      <MenuItem value="Pre-Bootcamp Related">
                        Pre-Bootcamp Related
                      </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                    <CustomTypography>
                      Prefered Voice Communication Language
                    </CustomTypography>
                    <TextField
                      select
                      name="heading"
                      variant="outlined"
                      label="Language"
                      type="text"
                      fullWidth
                      value={queryData.language}
                      onChange={(e) =>
                        setQueryData({
                          ...queryData,
                          language: e.target.value,
                        })
                      }
                      sx={{ width: '310px' }}
                    >
                      <MenuItem value="English">English</MenuItem>
                      <MenuItem value="Hindi">Hindi</MenuItem>
                      <MenuItem value="Tamil">Tamil</MenuItem>
                    </TextField>
                  </Grid>
                </Grid>

                <Typography>Details</Typography>
                <Grid
                  container
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                    <CustomTypography>Query Title</CustomTypography>
                    <TextField
                      name="heading"
                      variant="outlined"
                      label="Query Title"
                      type="text"
                      fullWidth
                      value={queryData.title}
                      onChange={(e) =>
                        setQueryData({
                          ...queryData,
                          title: e.target.value,
                        })
                      }
                      sx={{ width: '310px' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} mb={2}>
                    <CustomTypography>Query Description</CustomTypography>

                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={10}
                      placeholder="Minimum 3 rows"
                      style={{ width: 310 }}
                      value={queryData.description}
                      onChange={(e) =>
                        setQueryData({
                          ...queryData,
                          description: e.target.value,
                        })
                      }
                    />
                  </Grid>
                </Grid>

                <Typography>
                  Your available Time ? ( Ours : 9:00 AM - 7:00 PM )
                </Typography>
                <Grid
                  container
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                    <CustomTypography>From</CustomTypography>
                    <TimePicker
                      renderInput={(props) => (
                        <TextField
                          {...props}
                          fullWidth
                          sx={{ width: '310px' }}
                        />
                      )}
                      label="From"
                      name="timing"
                      value={queryData.starttime}
                      onChange={(e) => {
                        setQueryData({ ...queryData, starttime: e })
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} mb={2}>
                    <CustomTypography>Till</CustomTypography>
                    <TimePicker
                      renderInput={(props) => (
                        <TextField
                          {...props}
                          fullWidth
                          sx={{ width: '310px' }}
                        />
                      )}
                      label="Till"
                      name="timing"
                      value={queryData.endtime}
                      onChange={(e) => {
                        setQueryData({ ...queryData, endtime: e })
                      }}
                    />
                  </Grid>
                </Grid>
                <Typography>Attachments (Optional)</Typography>
                <AttachmentButton>+</AttachmentButton>

                <Grid
                  mb={2}
                  sx={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <CancelButton sx={{ mr: 2 }}>Cancel</CancelButton>
                  <CreateButton type="submit">Create</CreateButton>
                </Grid>
              </form>

              {/* Modal Starts */}
              <div>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {'Submitted Successfully'}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      The Query has been created successfully.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={() => navigate('/queries')} autoFocus>
                      View Queries
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
              {/* Modal Ends */}
            </LocalizationProvider>
          </Grid>
        </CustomPaper>
      </Grid>
    </Grid>
  )
}

export default CreateQueries
