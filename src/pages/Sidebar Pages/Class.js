import {
  Grid,
  Divider,
  Paper,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Stack,
  TextField,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Modal,
  Link,
} from '@mui/material'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { ColorButton } from '../../components/CustomComponents'
import styled from '@emotion/styled'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { getSessions } from '../../redux/actions/Sessions'

import {
  Content,
  PrereadContent,
  CustomChip,
  ClassHeading,
  CustomPaper,
  SessionHeading,
  SessionTiming,
  ContentHead,
  PrereadHead,
  TaskHeading,
  CustomAccordionSummary,
  TaskArea,
  ProgressHead,
  ProgressHeader,
  RoadmapIcon,
  RecordingButton,
  CustomStack,
  AdditionalSessionHeading,
  CustomAddSessionStack,
  AddSessionButton,
  modalstyle,
  CustomFieldLabel,
} from '../../components/CustomComponents'
import { Box } from '@mui/system'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import CloseIcon from '@mui/icons-material/Close'

import moment from 'moment'

import {
  deleteAdditionalSession,
  getAdditionalSessions,
} from '../../redux/actions/AdditionalSessions'
import { useNavigate } from 'react-router-dom'
import { createTask } from '../../redux/actions/Tasks'

const SessionContent = ({ session }) => {
  return (
    <>
      {session.map((content) => (
        <Content variant="body1">
          &nbsp;&nbsp;&nbsp; {content ? content : 'No Content Available'}
        </Content>
      ))}
    </>
  )
}

const PrereadData = ({ session }) => {
  return (
    <>
      {session.map((prereadcontent) => (
        <PrereadContent variant="body1">
          &nbsp;&nbsp;&nbsp;{' '}
          {prereadcontent ? prereadcontent : 'No Preread Available'}
        </PrereadContent>
      ))}
    </>
  )
}

const Tag = ({ tags }) => {
  return (
    <>
      <CustomChip label={tags} />
    </>
  )
}

const AddSession = ({
  addsession,
  setAddSessions,
  setAddSessionId,
  additionalSessions,
  user,
}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSelect = (id) => {
    setAddSessionId(id)
    navigate('/admin')
  }
  useEffect(() => {
    dispatch(getAdditionalSessions())
    setAddSessions(additionalSessions) 
  }, [user])
  return (
    <>
      <CustomStack>
        <AdditionalSessionHeading>
          {addsession.heading}
        </AdditionalSessionHeading>
        <SessionTiming>
          {moment(addsession.timing).format('LLLL')}
        </SessionTiming>
        {user.role === 'Admin' ? (
          <Stack direction="row">
            <IconButton
              color="info"
              onClick={() => handleSelect(addsession._id)}
            >
              <EditIcon sx={{ color: 'rgb(75, 13, 186)' }} />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => dispatch(deleteAdditionalSession(addsession._id))}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
        ) : null}
      </CustomStack>
    </>
  )
}

const Class = ({ setAddSessionId }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [sessionData, setSessionData] = useState([])
  const [addSessions, setAddSessions] = useState([])
  const [taskData, setTaskData] = useState({
    title: '',
    frontendSourceCode: '',
    backendSourceCode: '',
    frontendDeployed: '',
    backendDeployed: '',
  })

  const sessions = useSelector((state) => state.Sessions)
  const additionalSessions = useSelector((state) => state.AdditionalSessions)

  const getSession = (sessionId) => {
    const sessionDetail = sessions.filter(
      (session) => session.sessionId === sessionId,
    )
    setSessionData(sessionDetail)
    console.log(sessionDetail)
  }

  const getAdditionalSession = (sessionId) => {
    const sessionDetail = additionalSessions.filter(
      (session) => session._id === sessionId,
    )
    console.log(sessionDetail)
    setSessionData(sessionDetail)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(taskData)
    dispatch(createTask(taskData))
  }

  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem('token')),
  )

  useEffect(() => {
    dispatch(getSessions())
    dispatch(getAdditionalSessions())
    setAddSessions(additionalSessions)
  }, [])
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        {/* Session Details and Task Details Starts */}
        <Grid item xs={12} sm={12} md={12} lg={8} sx={{ ml: 0 }}>
          {/* Session Details starts */}
          <Grid>
            <ClassHeading
              sx={{
                p: 2,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: '500', lineHeight: '1.2' }}
              >
                {sessionData[0]
                  ? 'Please watch the recording'
                  : 'Join the class on time!'}
              </Typography>
              {sessionData[0] ? (
                <RecordingButton onClick={() => handleClickOpen()}>
                  Play Recording
                </RecordingButton>
              ) : null}
            </ClassHeading>
            <CustomPaper sx={{ p: 2 }}>
              <SessionHeading variant="h5">
                {sessionData[0]
                  ? sessionData.map((session) => session.heading)
                  : 'No session title available'}
              </SessionHeading>
              <SessionTiming variant="subtitle1" mb={2}>
                {sessionData[0]
                  ? sessionData.map((session) =>
                      moment(session.timing).format('LLLL'),
                    )
                  : 'Class schedule is not updated'}
              </SessionTiming>
              <Divider className="light"/>
              <ContentHead variant="body1" mt={2}>Contents:</ContentHead>
              {sessionData[0]
                ? sessionData.map((session) => (
                    <SessionContent session={session.contents} />
                  ))
                : 'No content available'}

              <PrereadHead variant="body1" mt={1}>
                Pre-read:
              </PrereadHead>
              {sessionData[0]
                ? sessionData.map((session) => (
                    <PrereadData session={session.preread} />
                  ))
                : 'No preread available'}
            </CustomPaper>
            {/* Modal Starts */}
            {sessionData[0]
              ? sessionData.map((session) => (
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={modalstyle}>
                      <Grid
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          height: '80px',
                          background: 'rgb(247, 245, 252)',
                          borderRadius: '16px 16px 0px 0px',
                          p: 2,
                        }}
                      >
                        <Typography variant="h5">Recording Link</Typography>
                        <IconButton onClick={() => handleClose()}>
                          <CloseIcon />
                        </IconButton>
                      </Grid>
                      <Grid sx={{ pl: 2, pr: 2 }}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                          sx={{
                            overflowWrap: 'break-word',
                            width: '460px',
                            fontSize: 15,
                            mt: 2,
                          }}
                        >
                          <Typography sx={{ color: '#555a8f' }}>
                            Recording Link:
                          </Typography>
                          <Link
                            href={session.recording}
                            target="_blank"
                            rel="noopener"
                          >
                            {session.recording}
                          </Link>
                        </Typography>
                      </Grid>
                      <Grid sx={{ pl: 2, pr: 2, pt: 0, pb: 2 }}>
                        <Typography
                          id="modal-modal-description"
                          sx={{ mt: 0, color: '#555a8f' }}
                        >
                          Passcode:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          {session.passcode ? session.passcode : 'No Passcode'}
                        </Typography>
                      </Grid>
                    </Box>
                  </Modal>
                ))
              : null}

            {/* Modal Ends */}
          </Grid>
          {/* Session Details ends */}

          {/* Task Details starts */}
          {sessionData[0] ? (
            <Grid>
              <TaskHeading mt={3} mb={2}>
                Activities
              </TaskHeading>
              <Paper>
                <Accordion>
                  <CustomAccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ overflowWrap: 'break-word' }}
                  >
                    <Typography
                      sx={{
                        fontWeight: '500',
                        fontSize: '1rem',
                      }}
                    >
                      {sessionData.map((session) => session.task)}
                    </Typography>
                  </CustomAccordionSummary>

                  <AccordionDetails>
                    <Typography>
                      <Stack direction="row" spacing={1}>
                        <Typography>Tags:</Typography>

                        {sessionData[0].tags
                          ? sessionData.map((session) =>
                              session.tags.map((tag) => <Tag tags={tag} />),
                            )
                          : null}
                      </Stack>
                    </Typography>

                    <TaskArea>
                      <form onSubmit={handleSubmit}>
                        <Grid sx={{ margin: '20px 0' }}>
                          <CustomFieldLabel variant="subtitle1">
                            Title
                          </CustomFieldLabel>
                          <TextField
                            name="heading"
                            variant="outlined"
                            type="text"
                            fullWidth
                            value={sessionData[0].heading}
                            onChange={(e) =>
                              setTaskData({
                                ...taskData,
                                title: e.target.value,
                              })
                            }
                          />
                        </Grid>
                        <Grid sx={{ margin: '20px 0' }}>
                          <CustomFieldLabel variant="subtitle1">
                            Front End Source Code
                          </CustomFieldLabel>
                          <TextField
                            name="frontendSourceCode"
                            variant="outlined"
                            type="text"
                            fullWidth
                            value={taskData.frontendSourceCode}
                            onChange={(e) =>
                              setTaskData({
                                ...taskData,
                                frontendSourceCode: e.target.value,
                              })
                            }
                          />
                        </Grid>
                        <Grid sx={{ margin: '20px 0' }}>
                          <CustomFieldLabel variant="subtitle1">
                            Front End Deployed URL
                          </CustomFieldLabel>
                          <TextField
                            name="frontendDeployed"
                            variant="outlined"
                            type="text"
                            fullWidth
                            value={taskData.frontendDeployed}
                            onChange={(e) =>
                              setTaskData({
                                ...taskData,
                                frontendDeployed: e.target.value,
                              })
                            }
                          />
                        </Grid>
                        <Grid sx={{ margin: '20px 0' }}>
                          <CustomFieldLabel variant="subtitle1">
                            Back End Source Code
                          </CustomFieldLabel>
                          <TextField
                            name="backendSourceCode"
                            variant="outlined"
                            type="text"
                            fullWidth
                            value={taskData.backendSourceCode}
                            onChange={(e) =>
                              setTaskData({
                                ...taskData,
                                backendSourceCode: e.target.value,
                              })
                            }
                          />
                        </Grid>
                        <Grid sx={{ margin: '20px 0' }}>
                          <CustomFieldLabel variant="subtitle1">
                            Back End Deployed URL
                          </CustomFieldLabel>
                          <TextField
                            name="backendDeployed"
                            variant="outlined"
                            type="text"
                            fullWidth
                            value={taskData.backendDeployed}
                            onChange={(e) =>
                              setTaskData({
                                ...taskData,
                                backendDeployed: e.target.value,
                              })
                            }
                          />
                        </Grid>

                        <Grid
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                          }}
                        >
                          <ColorButton
                            variant="outlined"
                            type="submit"
                            sx={{
                              borderRadius: '8px',
                              fontSize: '16px',
                              margin: '20px 0px',
                            }}
                          >
                            Submit
                          </ColorButton>
                        </Grid>
                      </form>
                    </TaskArea>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            </Grid>
          ) : null}
          {/* Task Details ends */}
        </Grid>
        {/* Session Details Task Details Ends */}

        {/* Roadmap and Additional Session starts */}
        <Grid item xs={12} sm={12} md={12} lg={4}>
          {/* Roadmap starts */}
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <CustomPaper sx={{ width: '410px',marginLeft:'20px' }}>
              <ProgressHead>
                <ProgressHeader>Sessions Roadmap</ProgressHeader>
              </ProgressHead>
              <Stack
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'space-evenly',
                  mb: 2,
                }}
              >
                <Grid
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'space-evenly',
                    mb: 2,
                    mt: 2,
                  }}
                >
                  <RoadmapIcon onClick={() => getSession(1)}>1</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(2)}>2</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(3)}>3</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(4)}>4</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(5)}>5</RoadmapIcon>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'space-evenly',
                    mb: 2,
                  }}
                >
                  <RoadmapIcon onClick={() => getSession(6)}>6</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(7)}>7</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(8)}>8</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(9)}>9</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(10)}>10</RoadmapIcon>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'space-evenly',
                    mb: 2,
                  }}
                >
                  <RoadmapIcon onClick={() => getSession(11)}>11</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(12)}>12</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(13)}>13</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(14)}>14</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(15)}>15</RoadmapIcon>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'space-evenly',
                    mb: 2,
                  }}
                >
                  <RoadmapIcon onClick={() => getSession(16)}>16</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(17)}>17</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(18)}>18</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(19)}>19</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(20)}>20</RoadmapIcon>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'space-evenly',
                    mb: 2,
                  }}
                >
                  <RoadmapIcon onClick={() => getSession(21)}>21</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(22)}>22</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(23)}>23</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(24)}>24</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(25)}>25</RoadmapIcon>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'space-evenly',
                    mb: 2,
                  }}
                >
                  <RoadmapIcon onClick={() => getSession(26)}>26</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(27)}>27</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(28)}>28</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(29)}>29</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(30)}>30</RoadmapIcon>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'space-evenly',
                    mb: 2,
                  }}
                >
                  <RoadmapIcon onClick={() => getSession(31)}>31</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(32)}>32</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(33)}>33</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(34)}>34</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(35)}>35</RoadmapIcon>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'space-evenly',
                    mb: 2,
                  }}
                >
                  <RoadmapIcon onClick={() => getSession(36)}>36</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(37)}>37</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(38)}>38</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(39)}>39</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(40)}>40</RoadmapIcon>
                </Grid>
                <Grid
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'space-evenly',
                    mb: 2,
                  }}
                >
                  <RoadmapIcon onClick={() => getSession(41)}>41</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(42)}>42</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(43)}>43</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(44)}>44</RoadmapIcon>
                  <RoadmapIcon onClick={() => getSession(45)}>45</RoadmapIcon>
                </Grid>
              </Stack>
            </CustomPaper>
          </Grid>
          {/* Roadmap ends */}

          {/* Additional Sessions starts */}
          <Grid
            container
            spacing={2}
            sx={{
              display: 'flex',
              mt: 1,
              width: '420px',
              marginLeft:'5px' 
            }}
          >
            <Grid item>
              <CustomPaper>
                <ProgressHead>
                  <ProgressHeader>Additional Sessions</ProgressHeader>
                </ProgressHead>

                <CustomAddSessionStack>
                  {addSessions.map((addsession) => (
                    <AddSessionButton
                      onClick={() => getAdditionalSession(addsession._id)}
                    >
                      <AddSession
                        addsession={addsession}
                        setAddSessions={setAddSessions}
                        setAddSessionId={setAddSessionId}
                        additionalSessions={additionalSessions}
                        user={user}
                      />
                    </AddSessionButton>
                  ))}
                </CustomAddSessionStack>
              </CustomPaper>
            </Grid>
          </Grid>
          {/* Additional session ends */}
        </Grid>
        {/* Roadmap and Additional Session ends */}
      </Grid>
    </>
  )
}

export default Class
