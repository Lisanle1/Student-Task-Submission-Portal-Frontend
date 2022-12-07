import { Button, Chip, Divider, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  ColorButton2,
  CustomPaper,
  CustomPaper2,
  CustomPaper3,
  QueryButton,
  QueryChip,
  QueryHeading,
  QueryTag,
  SessionHeading,
} from '../../components/CustomComponents'
import { getQueries } from '../../redux/actions/Queries'
import moment from 'moment'

const Query = ({ query, getSingleQuery }) => {
  return (
    <CustomPaper
      sx={{ mb: 1, mt: 1, cursor: 'pointer' }}
      onClick={() => getSingleQuery(query._id)}
    >
      <Grid
        container
        sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
      >
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <QueryHeading>
            {query.title}&nbsp;
            QN12614 - Request for Heroku Alternate to deploy.
          </QueryHeading>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <QueryChip filled label="Closed"></QueryChip>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: 0,
          pb: 2,
          pl: 2,
          pr: 2,
        }}
      >
        <Grid item>
          <QueryTag filled label={query.category}></QueryTag>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" sx={{ color: '#555a8f' }}>
            {moment(query.createdAt).format('DD/MM/YYYY, hh:mm a')}
          </Typography>
        </Grid>
      </Grid>
    </CustomPaper>
  )
}

const Queries = () => {
  const [fetchedQuery, setFetchedQuery] = useState([])
  const dispatch = useDispatch()
  const queries = useSelector((state) => state.Queries)
  console.log(queries)

  const getSingleQuery = (queryId) => {
    const queryDetails = queries.filter((query) => query._id === queryId)
    setFetchedQuery(queryDetails)
    console.log(fetchedQuery)
  }

  useEffect(() => {
    dispatch(getQueries())
  }, [])
  const navigate = useNavigate()
  return (
    <Grid container sx={{ wordWrap: 'break-word' }}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <CustomPaper3>
          <QueryButton onClick={() => navigate('/queries/create')}>
            + Create Query
          </QueryButton>
        </CustomPaper3>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6} mb={2}>
        {queries.map((query) => (
          <Query
            key={query._id}
            query={query}
            getSingleQuery={getSingleQuery}
          />
        ))}
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={5}
        sx={{
          pl: 2,
          mt: 1,
        }}
      >
        <CustomPaper sx={{ p: 2, wordWrap: 'break-word' }}>
          <Typography align="center">Recent Query</Typography>
          <Grid
            container
            sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
          >
            <Grid item xs={10} sm={10} md={10} lg={10}>
              <QueryHeading>
                {fetchedQuery[0]
                  ? fetchedQuery[0].title
                  : 'No Queries Available'}
              </QueryHeading>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <QueryChip filled label="Closed"></QueryChip>
            </Grid>
          </Grid>
          <Divider />
          <Grid item>
            <Grid container mt={2}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{
                  display: 'flex',

                  mt: 2,
                  mb: 2,
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  sx={{
                    display: 'flex',
                    // justifyContent: 'space-between',
                  }}
                >
                  <Grid
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    sx={{ flexDirection: 'column' }}
                  >
                    <Typography p={0} m={0} sx={{ color: 'rgb(126 142 159)' }}>
                      Created at:
                    </Typography>
                    <Typography p={0} m={0} sx={{ color: '#555a8f' }}>
                      {fetchedQuery[0]
                        ? moment(fetchedQuery[0].createdAt).format(
                            'DD/MM/YYYY, hh:mm a',
                          )
                        : 'No Data Available'}
                    </Typography>
                  </Grid>
                  <Grid
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography p={0} m={0} sx={{ color: 'rgb(126 142 159)' }}>
                      Assigned to:
                    </Typography>

                    <Typography p={0} m={0} sx={{ color: '#555a8f' }}>
                      Ravi Kumar
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography p={0} m={0} sx={{ color: 'rgb(126 142 159)' }}>
                  Description:
                </Typography>
                <Typography p={0} m={0} sx={{ color: '#555a8f' }}>
                  {fetchedQuery[0]
                    ? fetchedQuery[0].description
                    : 'No Data Available'}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 7,
            }}
          >
            <ColorButton2 sx={{ borderRadius: '8px' }}>
              Go To Query
            </ColorButton2>
          </Grid>
        </CustomPaper>
      </Grid>
    </Grid>
  )
}

export default Queries
