import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  ColorButton2,
  CustomPaper,
  CustomPaper3,
  WebcodeChip,
  QueryHeading,
} from '../../components/CustomComponents'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import {
  createCapstoneSubmission,
  getCapstone,
} from '../../redux/actions/Capstone'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#fff',
    color: 'black',
    fontWeight: 'bolder',
    fontFamily: 'DM Sans',
    fontSize: '15px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
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

const CapstoneDetail = ({ capstone, getSingleCapstone }) => {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem('token')),
  )
  console.log(user)
  return (
    <CustomPaper
      sx={{ mb: 1, mt: 1, cursor: 'pointer' }}
      onClick={() => getSingleCapstone(capstone._id)}
    >
      <Grid
        container
        sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
      >
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <QueryHeading>{user.name}</QueryHeading>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <WebcodeChip filled label="Capstone"></WebcodeChip>
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
        <Grid item xs={6} sm={6} md={6} lg={6}>
          {/* <QueryTag filled label={query.category}></QueryTag> */}
          <Typography sx={{ color: '#7e8e9f' }}>{capstone.title}</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-end"
        >
          <Typography variant="subtitle2" sx={{ color: '#555a8f' }}>
            Yet to be graded
          </Typography>
        </Grid>
      </Grid>
    </CustomPaper>
  )
}

const Capstone = () => {
  const [fetchedCapstone, setFetchedCapstone] = useState([])
  const [formData, setFormData] = useState({
    frontendSourceCode: '',
    frontendDeployed: '',
    backendSourceCode: '',
    backendDeployed: '',
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const capstone = useSelector((state) => state.Capstone)
  console.log(capstone)

  const getSingleCapstone = (capstoneId) => {
    const capstoneDetails = capstone.filter((cap) => cap._id === capstoneId)
    setFetchedCapstone(capstoneDetails)
    console.log(fetchedCapstone)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    dispatch(createCapstoneSubmission(formData))
    handleClickOpen()
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

  useEffect(() => {
    dispatch(getCapstone())
  }, [])
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem('token')),
  )
  console.log(user.name)
  return (
    <Grid container sx={{ wordWrap: 'break-word' }}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <CustomPaper3></CustomPaper3>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6} mb={2}>
        {capstone.map((cap) => (
          <CapstoneDetail
            key={cap._id}
            capstone={cap}
            getSingleCapstone={getSingleCapstone}
          />
        ))}
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        sx={{
          pl: 2,
          mt: 1,
        }}
      >
        <CustomPaper sx={{ p: 2, wordWrap: 'break-word' }}>
          <Grid
            container
            sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
          >
            <Grid item xs={10} sm={10} md={10} lg={10}>
              <QueryHeading>{user.name}</QueryHeading>
              <Typography sx={{ color: '#7e8e9f' }}>
                {fetchedCapstone[0]
                  ? fetchedCapstone[0].title
                  : 'No Capstone Project Available'}
              </Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <WebcodeChip filled label="Capstone"></WebcodeChip>
            </Grid>
          </Grid>
          <Divider />
          <Grid item mb={4}>
            <Grid container mt={2}>
              <Grid item mt={2}>
                <Typography
                  p={0}
                  m={0}
                  sx={{ color: 'rgb(126 142 159)', mb: 2 }}
                >
                  Description:
                </Typography>
                <Typography
                  sx={{ fontWeight: 'bolder', color: '#555a8f', mb: 2 }}
                >
                  Task Document Link
                </Typography>
                <Typography>
                  <Link>
                    {fetchedCapstone[0]
                      ? fetchedCapstone[0].doclink
                      : 'No Data Available'}
                  </Link>
                </Typography>
                <Typography
                  sx={{ fontWeight: 'bolder', color: '#555a8f', mt: 2, mb: 2 }}
                >
                  Guidelines:
                </Typography>
                <Typography p={0} m={0} sx={{ color: '#555a8f' }}>
                  {fetchedCapstone[0]
                    ? fetchedCapstone[0].description
                    : 'No Data Available'}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Form Starts */}
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Code</StyledTableCell>
                    <StyledTableCell align="left">Submission</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <StyledTableCell>Front-end Source code</StyledTableCell>
                    <StyledTableCell align="left">
                      <TextField
                        name="frontendSourceCode"
                        variant="outlined"
                        label="Link"
                        type="text"
                        fullWidth
                        value={formData.frontendSourceCode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            frontendSourceCode: e.target.value,
                          })
                        }
                      />
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell>Back-end Source code</StyledTableCell>
                    <StyledTableCell align="left">
                      <TextField
                        name="backendSourceCode"
                        variant="outlined"
                        label="Link"
                        type="text"
                        fullWidth
                        value={formData.backendSourceCode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            backendSourceCode: e.target.value,
                          })
                        }
                      />
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell>Front-end Deployed URL</StyledTableCell>
                    <StyledTableCell align="left">
                      <TextField
                        name="frontendDeployed"
                        variant="outlined"
                        label="Link"
                        type="text"
                        fullWidth
                        value={formData.frontendDeployed}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            frontendDeployed: e.target.value,
                          })
                        }
                      />
                    </StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell>Back-end Deployed URL</StyledTableCell>
                    <StyledTableCell align="left">
                      <TextField
                        name="backendDeployed"
                        variant="outlined"
                        label="Link"
                        type="text"
                        fullWidth
                        value={formData.backendDeployed}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            backendDeployed: e.target.value,
                          })
                        }
                      />
                    </StyledTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Grid
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 7,
              }}
            >
              <ColorButton2 type="submit" sx={{ borderRadius: '8px' }}>
                Submit
              </ColorButton2>
            </Grid>
          </form>
          {/* Form Ends */}
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
                  The Capstone Project has been submitted successfully.
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
    </Grid>
  )
}

export default Capstone
