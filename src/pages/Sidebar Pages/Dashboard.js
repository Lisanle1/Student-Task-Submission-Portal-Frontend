import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import {
  CustomPaper,
  ProgressHead,
  ProgressHeader,
  ProgressHeader2,
  SessionHeading,
} from '../../components/CustomComponents'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import styled from '@emotion/styled'
import AreaChart from '../../components/AreaChart'
import BarChart from '../../components/BarChart'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: '1rem',
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}))

const Dashboard = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={8}>
        <SessionHeading>Overview</SessionHeading>
        <CustomPaper>
          <Box sx={{ flexGrow: 1, p: 4, m: 4 }}>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <ProgressHeader2>Completion</ProgressHeader2>
              <ProgressHeader2>50/100%</ProgressHeader2>
            </Stack>
            <BorderLinearProgress variant="determinate" value={50} />
          </Box>
        </CustomPaper>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={5}
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        <Box>
          <BarChart />
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={8}>
        <AreaChart />
      </Grid>
    </Grid>
  )
}

export default Dashboard
