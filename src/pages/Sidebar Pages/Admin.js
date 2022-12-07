import React, { useEffect, useRef, useState } from 'react'
import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  MenuItem,
  Menu,
  FormControl,
  InputLabel,
  Select,
  FormLabel,
  FormControlLabel,
  Checkbox,
  FormGroup,
  IconButton,
  Chip,
  Alert,
} from '@mui/material'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import { useDispatch, useSelector } from 'react-redux'
import { ColorButton } from '../../components/CustomComponents'
import styled from '@emotion/styled'
import { updateSession, createSession } from '../../redux/actions/Sessions'
import { useNavigate } from 'react-router-dom'
import {
  createAdditionalSession,
  updateAdditionalSession,
} from '../../redux/actions/AdditionalSessions'
import { ColorButton2, CustomPaper } from '../../components/CustomComponents'
import { createWebcode } from '../../redux/actions/Webcode'
import { createCapstone } from '../../redux/actions/Capstone'

const sessions = [
  { name: 'Day 1', sessionId: '1' },
  { name: 'Day 2', sessionId: '2' },
  { name: 'Day 3', sessionId: '3' },
  { name: 'Day 4', sessionId: '4' },
  { name: 'Day 5', sessionId: '5' },
  { name: 'Day 6', sessionId: '6' },
  { name: 'Day 7', sessionId: '7' },
  { name: 'Day 8', sessionId: '8' },
  { name: 'Day 9', sessionId: '9' },
  { name: 'Day 10', sessionId: '10' },
  { name: 'Day 11', sessionId: '11' },
  { name: 'Day 12', sessionId: '12' },
  { name: 'Day 13', sessionId: '13' },
  { name: 'Day 14', sessionId: '14' },
  { name: 'Day 15', sessionId: '15' },
  { name: 'Day 16', sessionId: '16' },
  { name: 'Day 17', sessionId: '17' },
  { name: 'Day 18', sessionId: '18' },
  { name: 'Day 19', sessionId: '19' },
  { name: 'Day 20', sessionId: '20' },
  { name: 'Day 21', sessionId: '21' },
  { name: 'Day 22', sessionId: '22' },
  { name: 'Day 23', sessionId: '23' },
  { name: 'Day 24', sessionId: '24' },
  { name: 'Day 25', sessionId: '25' },
  { name: 'Day 26', sessionId: '26' },
  { name: 'Day 27', sessionId: '27' },
  { name: 'Day 28', sessionId: '28' },
  { name: 'Day 29', sessionId: '29' },
  { name: 'Day 30', sessionId: '30' },
  { name: 'Day 31', sessionId: '31' },
  { name: 'Day 32', sessionId: '32' },
  { name: 'Day 33', sessionId: '33' },
  { name: 'Day 34', sessionId: '34' },
  { name: 'Day 35', sessionId: '35' },
  { name: 'Day 36', sessionId: '36' },
  { name: 'Day 37', sessionId: '37' },
  { name: 'Day 38', sessionId: '38' },
  { name: 'Day 39', sessionId: '39' },
  { name: 'Day 40', sessionId: '40' },
  { name: 'Day 41', sessionId: '41' },
  { name: 'Day 42', sessionId: '42' },
  { name: 'Day 43', sessionId: '43' },
  { name: 'Day 44', sessionId: '44' },
  { name: 'Day 45', sessionId: '45' },
]

export const CustomTypography = styled(Typography)({
  fontFamily: 'DM Sans',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#7e8e9f',
  paddingBottom: '5px',
})

const Admin = ({ currentId, setCurrentId, addSessionId, setAddSessionId }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [sessionData, setSessionData] = useState({
    sessionId: '',
    heading: '',
    timing: new Date(),
    contents: '',
    preread: '',
    task: '',
    tags: '',
    recording: '',
    passcode: '',
    submission: [],
  })

  const [additionalData, setAdditionalData] = useState({
    heading: '',
    timing: new Date(),
    contents: '',
    preread: '',
    recording: '',
    passcode: '',
  })

  const [webcode, setWebcode] = useState({
    title: '',
    doclink: '',
    description: '',
  })

  const [capstone, setCapstone] = useState({
    title: '',
    doclink: '',
    description: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(sessionData)

    if (currentId) {
      dispatch(updateSession(currentId, sessionData))
      handleClickOpen()
      handleClear()
    } else {
      dispatch(createSession(sessionData))
      handleClickOpen()
      handleClear()
    }
  }

  const submitAdditional = (e) => {
    e.preventDefault()
    console.log(additionalData)

    if (addSessionId) {
      dispatch(updateAdditionalSession(addSessionId, additionalData))
      handleClickOpen()
      clearAdditional()
    } else {
      dispatch(createAdditionalSession(additionalData))
      handleClickOpen()
      clearAdditional()
    }
  }

  const submitWebcode = (e) => {
    e.preventDefault()
    dispatch(createWebcode(webcode))
    handleClickOpen()
  }

  const submitCapstone = (e) => {
    e.preventDefault()
    console.log(capstone)
    dispatch(createCapstone(capstone))
    handleClickOpen()
  }

  const handleClear = () => {
    setSessionData({
      sessionId: '',
      heading: '',
      timing: new Date(),
      contents: [''],
      preread: [''],
      task: '',
      tags: [''],
      recording: '',
      passcode: '',
      submission: [],
    })
    setCurrentId(null)
  }

  const clearAdditional = () => {
    setAdditionalData({
      heading: '',
      timing: new Date(),
      contents: '',
      preread: '',
      recording: '',
      passcode: '',
    })
    setAddSessionId(null)
  }

  //   Modal States Starts
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  //   Modal States Ends

  const session = useSelector((state) =>
    currentId ? state.Sessions.find((s) => s._id === currentId) : null,
  )

  const addsession = useSelector((state) =>
    addSessionId
      ? state.AdditionalSessions.find((s) => s._id === addSessionId)
      : null,
  )

  useEffect(() => {
    if (session) setSessionData(session)
    if (addsession) setAdditionalData(addsession)
  }, [session])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <CustomPaper sx={{ p: 2 }}>
          <Typography variant="h4">
            {currentId ? 'Edit' : 'Create'} a session
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Grid mb={2}>
                <CustomTypography>Session</CustomTypography>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Session</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sessionData.sessionId}
                    label="Age"
                    onChange={(e) =>
                      setSessionData({
                        ...sessionData,
                        sessionId: e.target.value,
                      })
                    }
                  >
                    {sessions.map((item) => (
                      <MenuItem key={item.sessionId} value={item.sessionId}>{item.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid mb={2}>
                <CustomTypography>Session Heading</CustomTypography>
                <TextField
                  name="heading"
                  variant="outlined"
                  label="Session Heading"
                  type="text"
                  fullWidth
                  value={sessionData.heading}
                  onChange={(e) =>
                    setSessionData({ ...sessionData, heading: e.target.value })
                  }
                />
              </Grid>
              <Grid mb={2}>
                <CustomTypography>Session Timing</CustomTypography>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} fullWidth />}
                  label="Session Timing"
                  name="timing"
                  value={sessionData.timing}
                  onChange={(e) => {
                    setSessionData({ ...sessionData, timing: e })
                  }}
                />
              </Grid>
              <Grid mb={2}>
                <CustomTypography>Contents</CustomTypography>
                <TextField
                  name="contents"
                  variant="outlined"
                  label="Contents - separated by comma "
                  type="text"
                  fullWidth
                  value={sessionData.contents}
                  onChange={(e) =>
                    setSessionData({ ...sessionData, contents: e.target.value })
                  }
                />
              </Grid>
              <Grid mb={2}>
                <CustomTypography>Preread</CustomTypography>
                <TextField
                  name="preread"
                  variant="outlined"
                  label="Preread - separated by comma "
                  type="text"
                  fullWidth
                  value={sessionData.preread}
                  onChange={(e) =>
                    setSessionData({ ...sessionData, preread: e.target.value })
                  }
                />
              </Grid>
              <Grid mb={2}>
                <CustomTypography>Task</CustomTypography>
                <TextField
                  name="task"
                  variant="outlined"
                  label="Task Link "
                  type="text"
                  fullWidth
                  value={sessionData.task}
                  onChange={(e) =>
                    setSessionData({ ...sessionData, task: e.target.value })
                  }
                />
              </Grid>
              <Grid mb={2}>
                <CustomTypography>Tags</CustomTypography>
                <TextField
                  name="tags"
                  variant="outlined"
                  label="Tags - separated by comma"
                  type="text"
                  fullWidth
                  value={sessionData.tags}
                  onChange={(e) =>
                    setSessionData({ ...sessionData, tags: e.target.value })
                  }
                />
              </Grid>
              <Grid mb={2}>
                <CustomTypography>Session Recording Link</CustomTypography>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    value={sessionData.recording}
                    label="Recording Link"
                    onChange={(e) =>
                      setSessionData({
                        ...sessionData,
                        recording: e.target.value,
                      })
                    }
                  />
                </FormControl>
              </Grid>
              <Grid mb={2}>
                <CustomTypography>Recording Passcode </CustomTypography>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    value={sessionData.passcode}
                    label="Passcode"
                    onChange={(e) =>
                      setSessionData({
                        ...sessionData,
                        passcode: e.target.value,
                      })
                    }
                  />
                </FormControl>
              </Grid>
              <Grid mb={2}>
                <CustomTypography>Submissions Required</CustomTypography>

                <FormGroup>
                  <FormControl sx={{ mb: 2 }}>
                    <TextField
                      select
                      label="Select Front End Submission"
                      defaultValue={''}
                      value={sessionData.submission[0]}
                      onChange={(e) => {
                        setSessionData({
                          ...sessionData,
                          submission: [
                            ...sessionData.submission,
                            {
                              typolabel: 'Frontend Source Code',
                              fieldname: e.target.value,
                            },
                          ],
                        })
                      }}
                    >
                      <MenuItem value="">None</MenuItem>
                      <MenuItem value="frontendSourceCode">
                        Front-end Source Code
                      </MenuItem>
                    </TextField>
                  </FormControl>
                  <FormControl sx={{ mb: 2 }}>
                    <TextField
                      select
                      label="Select Front End Submission"
                      defaultValue={''}
                      value={sessionData.submission[1]}
                      onChange={(e) => {
                        setSessionData({
                          ...sessionData,
                          submission: [
                            ...sessionData.submission,
                            {
                              typolabel: 'Frontend Deployed URL',
                              fieldname: e.target.value,
                            },
                          ],
                        })
                      }}
                    >
                      <MenuItem value="">None</MenuItem>
                      <MenuItem value="frontendDeployed">
                        Front-end Deployed URL
                      </MenuItem>
                    </TextField>
                  </FormControl>
                  <FormControl sx={{ mb: 2 }}>
                    <TextField
                      select
                      label="Select Back End Submission"
                      defaultValue={''}
                      value={sessionData.submission[2]}
                      onChange={(e) => {
                        setSessionData({
                          ...sessionData,
                          submission: [
                            ...sessionData.submission,
                            {
                              typolabel: 'Backend Source Code',
                              fieldname: e.target.value,
                            },
                          ],
                        })
                      }}
                    >
                      <MenuItem value="">None</MenuItem>
                      <MenuItem value="backsource">
                        Backend Source Code
                      </MenuItem>
                    </TextField>
                  </FormControl>
                  <FormControl sx={{ mb: 2 }}>
                    <TextField
                      select
                      label="Select Back End Submission"
                      defaultValue={''}
                      value={sessionData.submission[0]}
                      onChange={(e) => {
                        setSessionData({
                          ...sessionData,
                          submission: [
                            ...sessionData.submission,
                            {
                              typolabel: 'Backend Deployed URL',
                              fieldname: e.target.value,
                            },
                          ],
                        })
                      }}
                    >
                      <MenuItem value="">None</MenuItem>
                      <MenuItem value="backdeployed">
                        Backend Deployed URL
                      </MenuItem>
                    </TextField>
                  </FormControl>
                </FormGroup>
                <Alert severity="error">
                  <Typography variant="caption" sx={{ color: 'red' }}>
                    Note: The Submissions required fields will not clear on
                    clicking clear button. To clear the Submission Required
                    fields, please select the none option on all the fields and
                    then click clear to prevent incorrect value submission. Then
                    select the required options again to submit.
                  </Typography>
                </Alert>
              </Grid>

              <Grid mb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <ColorButton type="submit">Add Session</ColorButton>
                <ColorButton sx={{ ml: 2 }} onClick={handleClear}>
                  Clear
                </ColorButton>
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
                    The session has been added successfully.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Close</Button>
                  <Button onClick={() => navigate('/sessions')} autoFocus>
                    View Sessions
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            {/* Modal Ends */}
          </LocalizationProvider>
        </CustomPaper>
      </Grid>

      {/* Addition Session Form */}
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <CustomPaper sx={{ p: 2 }}>
          <Typography variant="h4">
            {addSessionId ? 'Update' : 'Create'} additional session
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form autoComplete="off" noValidate onSubmit={submitAdditional}>
              <Grid mb={2}>
                <CustomTypography>Session Heading</CustomTypography>
                <TextField
                  name="heading"
                  variant="outlined"
                  label="Session Heading"
                  type="text"
                  fullWidth
                  value={additionalData.heading}
                  onChange={(e) =>
                    setAdditionalData({
                      ...additionalData,
                      heading: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid mb={2}>
                <CustomTypography>Session Timing</CustomTypography>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} fullWidth />}
                  label="Session Timing"
                  name="timing"
                  value={additionalData.timing}
                  onChange={(e) => {
                    setAdditionalData({ ...additionalData, timing: e })
                  }}
                />
              </Grid>
              <Grid mb={2}>
                <CustomTypography>Contents</CustomTypography>
                <TextField
                  name="contents"
                  variant="outlined"
                  label="Contents - separated by comma "
                  type="text"
                  fullWidth
                  value={additionalData.contents}
                  onChange={(e) =>
                    setAdditionalData({
                      ...additionalData,
                      contents: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid mb={2}>
                <CustomTypography>Preread</CustomTypography>
                <TextField
                  name="preread"
                  variant="outlined"
                  label="Preread - separated by comma "
                  type="text"
                  fullWidth
                  value={additionalData.preread}
                  onChange={(e) =>
                    setAdditionalData({
                      ...additionalData,
                      preread: e.target.value,
                    })
                  }
                />
              </Grid>

              <Grid mb={2}>
                <CustomTypography>Session Recording Link</CustomTypography>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    value={additionalData.recording}
                    label="Recording Link"
                    onChange={(e) =>
                      setAdditionalData({
                        ...additionalData,
                        recording: e.target.value,
                      })
                    }
                  />
                </FormControl>
              </Grid>
              <Grid mb={2}>
                <CustomTypography>Recording Passcode </CustomTypography>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    value={additionalData.passcode}
                    label="Passcode"
                    onChange={(e) =>
                      setAdditionalData({
                        ...additionalData,
                        passcode: e.target.value,
                      })
                    }
                  />
                </FormControl>
              </Grid>

              <Grid mb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <ColorButton2 type="submit" size="small">
                  Create Additional Session
                </ColorButton2>
                <ColorButton2 sx={{ ml: 2 }} onClick={clearAdditional}>
                  Clear
                </ColorButton2>
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
                    The additional session has been added successfully.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Close</Button>
                  <Button onClick={() => navigate('/class')} autoFocus>
                    View Additional Sessions
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            {/* Modal Ends */}
          </LocalizationProvider>
        </CustomPaper>
      </Grid>

      {/* Webcode Form Starts */}
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <CustomPaper sx={{ p: 2 }}>
          <Typography variant="h4">Create Webcode</Typography>

          <form autoComplete="off" noValidate onSubmit={submitWebcode}>
            <Grid mb={2}>
              <CustomTypography>Webcode Title</CustomTypography>
              <TextField
                name="heading"
                variant="outlined"
                label="Title"
                type="text"
                fullWidth
                value={webcode.title}
                onChange={(e) =>
                  setWebcode({
                    ...webcode,
                    title: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid mb={2}>
              <CustomTypography>Webcode Document Link</CustomTypography>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  value={webcode.doclink}
                  label="Document Link"
                  onChange={(e) =>
                    setWebcode({
                      ...webcode,
                      doclink: e.target.value,
                    })
                  }
                />
              </FormControl>
            </Grid>
            <Grid mb={2}>
              <CustomTypography>Webcode Description</CustomTypography>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  value={webcode.description}
                  label="Description"
                  onChange={(e) =>
                    setWebcode({
                      ...webcode,
                      description: e.target.value,
                    })
                  }
                />
              </FormControl>
            </Grid>

            <Grid mb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
              <ColorButton2 type="submit" size="small">
                Create Webcode
              </ColorButton2>
              <ColorButton2 sx={{ ml: 2 }}>Clear</ColorButton2>
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
                  The Webcode has been added successfully.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={() => navigate('/webcode')} autoFocus>
                  View Webcodes
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          {/* Modal Ends */}
        </CustomPaper>
      </Grid>
      {/* Webcode Form ends */}
      {/* Capstone Form Starts */}
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <CustomPaper sx={{ p: 2 }}>
          <Typography variant="h4">Create Capstone Project</Typography>

          <form autoComplete="off" noValidate onSubmit={submitCapstone}>
            <Grid mb={2}>
              <CustomTypography>Capstone Project Title</CustomTypography>
              <TextField
                name="heading"
                variant="outlined"
                label="Title"
                type="text"
                fullWidth
                value={capstone.title}
                onChange={(e) =>
                  setCapstone({
                    ...capstone,
                    title: e.target.value,
                  })
                }
              />
            </Grid>

            <Grid mb={2}>
              <CustomTypography>Capstone Document Link</CustomTypography>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  value={capstone.doclink}
                  label="Document Link"
                  onChange={(e) =>
                    setCapstone({
                      ...capstone,
                      doclink: e.target.value,
                    })
                  }
                />
              </FormControl>
            </Grid>
            <Grid mb={2}>
              <CustomTypography>Capstone Project Description</CustomTypography>
              <FormControl fullWidth>
                <TextField
                  type="text"
                  value={capstone.description}
                  label="Description"
                  onChange={(e) =>
                    setCapstone({
                      ...capstone,
                      description: e.target.value,
                    })
                  }
                />
              </FormControl>
            </Grid>

            <Grid mb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
              <ColorButton2 type="submit" size="small">
                Create Capstone
              </ColorButton2>
              <ColorButton2 sx={{ ml: 2 }}>Clear</ColorButton2>
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
                  The Capstone Project has been added successfully.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={() => navigate('/capstone')} autoFocus>
                  View Capstone
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          {/* Modal Ends */}
        </CustomPaper>
      </Grid>
      {/* Capstone Form ends */}
    </Grid>
  )
}

export default Admin
