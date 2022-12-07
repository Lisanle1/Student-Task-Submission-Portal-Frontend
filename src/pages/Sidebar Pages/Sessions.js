import React, { useEffect } from 'react'
import { Button, Grid, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSession, getSessions } from '../../redux/actions/Sessions'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#4b0dba',
    color: theme.palette.common.white,
    fontFamily: 'DM Sans',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: 'DM Sans',
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const Sessions = ({ setCurrentId }) => {
  const sessions = useSelector((state) => state.Sessions)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSelect = (id) => {
    setCurrentId(id)
    navigate('/admin')
  }

  console.log(sessions)

  useEffect(() => {
    dispatch(getSessions())
  }, [dispatch])
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Session ID</StyledTableCell>
                <StyledTableCell align="center">Heading</StyledTableCell>
                <StyledTableCell align="center">Timing</StyledTableCell>
                <StyledTableCell align="center">Update/Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sessions.map((session) => (
                <StyledTableRow key={session._id}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {session.sessionId}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {session.heading}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {moment(session.timing).format('MMMM Do YYYY, h:mm a')}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {/* Edit Button */}
                    <IconButton
                      color="info"
                      onClick={() => handleSelect(session._id)}
                    >
                      <EditIcon sx={{ color: 'rgb(75, 13, 186)' }} />
                    </IconButton>
                    {/* Delete Button */}
                    <IconButton
                      color="error"
                      onClick={() => dispatch(deleteSession(session._id))}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default Sessions
