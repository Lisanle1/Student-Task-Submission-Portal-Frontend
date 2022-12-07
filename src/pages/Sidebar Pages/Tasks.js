import { Box, Chip, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CustomChip2,
  CustomPaper,
  CustomPaper2,
  SessionHeading,
} from '../../components/CustomComponents'
import { getTasks } from '../../redux/actions/Tasks'
import moment from 'moment'

const Task = ({ task }) => {
  console.log('This is tasks from function Task:' + task)
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem('token')),
  )
  return (
    <CustomPaper sx={{ p: 1, mb: 1 }}>
      <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
        <Grid
          xs={8}
          sm={8}
          md={8}
          lg={8}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            flexDirection: 'column',
            pl: 2,
          }}
        >
          <SessionHeading>{user.name}</SessionHeading>
          <Typography sx={{ color: '#7e8e9f' }}>{task.title}</Typography>
        </Grid>
        <Grid
          xs={4}
          sm={4}
          md={4}
          lg={4}
          sx={{
            p: 1,
          }}
        >
          <Box sx={{}}>
            <Typography
              variant="subtitle2"
              sx={{
                color: '#7e8e9f',
                pl: 5,
              }}
            >
              submitted on {moment(task.timing).format('DD/MM/YYYY')}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start',
              flexDirection: 'row',
            }}
          >
            <Typography sx={{ color: '#7e8e9f', ml: 1 }}>
              Yet to be graded
            </Typography>
            <CustomChip2 label="Task" sx={{ ml: 1 }} />
          </Box>
        </Grid>
      </Grid>
    </CustomPaper>
  )
}

const Tasks = () => {
  const dispatch = useDispatch()

  const tasks = useSelector((state) => state.Tasks)

  console.log(tasks)

  useEffect(() => {
    dispatch(getTasks())
  }, [])

  return (
    <Grid
      container
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <CustomPaper2></CustomPaper2>
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        {tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </Grid>
    </Grid>
  )
}

export default Tasks
