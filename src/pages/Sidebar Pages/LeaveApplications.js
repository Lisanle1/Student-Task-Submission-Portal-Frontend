import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Modal,
  TablePagination,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ColorButton2,
  CustomPaper3,
  QueryButton,
} from '../../components/CustomComponents'
import { styled, useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import LastPageIcon from '@mui/icons-material/LastPage'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { CustomTypography } from './Admin'

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { createLeaves, getLeaves } from '../../redux/actions/Leaves'

function createData(name, calories, fat) {
  return { name, calories, fat }
}

function TablePaginationActions(props) {
  const theme = useTheme()
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  )
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#f7f5fc',
    color: 'rgb(51, 2, 138)',
    fontWeight: 500,
    fontSize: '1rem',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '25px',
  boxShadow: 24,
  p: 2,
}

const LeaveApplications = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const leaves = useSelector((state) => state.Leaves)

  const [formData, setFormData] = useState({
    noOfDays: '',
    startdate: '',
    enddate: '',
    reason: '',
    status: 'NO',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    dispatch(createLeaves(formData))
  }

  useEffect(() => {
    dispatch(getLeaves())
  }, [])
  return (
    <Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <CustomPaper3>
          <QueryButton onClick={handleOpen}>+ Add</QueryButton>
        </CustomPaper3>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>From</StyledTableCell>
                <StyledTableCell align="left">To</StyledTableCell>
                <StyledTableCell align="left">Approved</StyledTableCell>
                <StyledTableCell align="left">Reason</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaves.map((leave) => (
                <StyledTableRow key={leave._id}>
                  <StyledTableCell component="th" scope="row" align="left">
                    {moment(leave.startdate).format('YYYY-MM-DD')}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {moment(leave.enddate).format('YYYY-MM-DD')}
                  </StyledTableCell>
                  <StyledTableCell align="left">{leave.status}</StyledTableCell>
                  <StyledTableCell align="left">{leave.reason}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            <TablePagination
              rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]}
            />
          </Table>
        </TableContainer>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Leave
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form onSubmit={handleSubmit}>
              <Grid mb={2}>
                <CustomTypography>Days</CustomTypography>
                <FormControl fullWidth>
                  <TextField
                    select
                    label="days"
                    size="small"
                    value={formData.noOfDays}
                    onChange={(e) =>
                      setFormData({ ...formData, noOfDays: e.target.value })
                    }
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="More than one">More than one</MenuItem>
                  </TextField>
                </FormControl>
              </Grid>

              <Grid mb={2}>
                <CustomTypography>From</CustomTypography>
                <DatePicker
                  renderInput={(props) => (
                    <TextField {...props} fullWidth size="small" />
                  )}
                  label="date"
                  name="timing"
                  value={formData.startdate}
                  onChange={(e) => {
                    setFormData({ ...formData, startdate: e })
                  }}
                />
              </Grid>
              <Grid mb={2}>
                <CustomTypography>To</CustomTypography>
                <DatePicker
                  renderInput={(props) => (
                    <TextField {...props} fullWidth size="small" />
                  )}
                  label="date"
                  name="timing"
                  value={formData.enddate}
                  onChange={(e) => {
                    setFormData({ ...formData, enddate: e })
                  }}
                />
              </Grid>
              <Grid mb={2}>
                <CustomTypography>Reason</CustomTypography>
                <FormControl fullWidth>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={6}
                    placeholder="Minimum 3 rows"
                    style={{ width: 360 }}
                    value={formData.reason}
                    onChange={(e) =>
                      setFormData({ ...formData, reason: e.target.value })
                    }
                  />
                </FormControl>
              </Grid>
              <Grid
                sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}
              >
                <ColorButton2
                  type="submit"
                  sx={{ mr: 2 }}
                  onClick={handleClose}
                >
                  Cancel
                </ColorButton2>
                <ColorButton2 type="submit">Create</ColorButton2>
              </Grid>
            </form>
          </LocalizationProvider>
        </Box>
      </Modal>
    </Grid>
  )
}

export default LeaveApplications
