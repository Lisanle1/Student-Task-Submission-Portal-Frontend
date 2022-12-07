import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import SidebarList from './SidebarList'
import {
  Avatar,
  Button,
  Grid,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
} from '@mui/material'
import Logo from './Logo.png'
import { Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Class from '../Sidebar Pages/Class'
import Dashboard from '../Sidebar Pages/Dashboard'
import Login from '../Login/Login'
import ResetPassword from '../ResetPassword/ResetPassword'
import ForgotPassword from '../ForgotPassword/ForgotPassword'
import { ColorButton } from '../../components/CustomComponents'
import Signup from '../Signup/Signup';
import { LOGOUT } from '../../redux/constants/actionTypes'
import Admin from '../Sidebar Pages/Admin'
import Sessions from '../Sidebar Pages/Sessions'
import Tasks from '../Sidebar Pages/Tasks'
import Queries from '../Sidebar Pages/Queries'
import CreateQueries from '../Sidebar Pages/CreateQueries'
import Webcode from '../Sidebar Pages/Webcode'
import Capstone from '../Sidebar Pages/Capstone'
import Requirements from '../Sidebar Pages/Requirements'
import Applications from '../Sidebar Pages/Applications'
import InterviewTasks from '../Sidebar Pages/InterviewTasks'
import LeaveApplications from '../Sidebar Pages/LeaveApplications'
import MockInterview from '../Sidebar Pages/MockInterview'
import Certificate from '../Sidebar Pages/Certificate'

const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  '&::-webkit-scrollbar': {
    width: 8,
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#F9FBFD',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#b6bfc9',
    borderRadius: 10,
  },
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  '&::-webkit-scrollbar': {
    width: 8,
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#F9FBFD',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#b6bfc9',
    borderRadius: 10,
  },
})

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#fff',
  display: 'flex',
  justifyContents: 'center',
  alignContents: 'center',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  fontFamily: 'DM Sans',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

const Sidebar = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const [loginButton, setLoginButton] = React.useState(true)

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem('token')),
  )
  console.log(user)

  const [pageName, setPageName] = useState('')

  const [currentId, setCurrentId] = useState(null)
  const [addSessionId, setAddSessionId] = useState(null)

  const logout = () => {
    dispatch({ type: LOGOUT })
    setUser(null)
    navigate('/')
  }

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer" 
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }), color: '#6610f2' }}
          >
            <MenuIcon />
          </IconButton>
          <Stack>
            <Typography variant="h4" color="black" sx={{ fontWeight: '500' }}>
              {pageName}
            </Typography>
          </Stack>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'right',
              justifyContent: 'right',
            }}
          >
          </Box> 

          <Box
            sx={{
              flexGrow: 0,
              display: {
                xs: 'none',
                md: 'flex',
              },
              alignItems: 'right',
              justifyContent: 'right',
            }}
          >
            {user?<span style={{color:'black',fontSize:'19px',marginTop:"7px"}}>{user.name}</span>:null}
            &nbsp;&nbsp;<Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user ? (
                  <Avatar/>
                ) : null}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={logout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Stack>
            <img src={Logo} width={80} height={80} alt=""/>
          </Stack>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        {user ? (
          <SidebarList pageName={pageName} setPageName={setPageName} />
        ) : null}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <DrawerHeader />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/admin"
            element={
              <Admin
                currentId={currentId}
                setCurrentId={setCurrentId}
                addSessionId={addSessionId}
                setAddSessionId={setAddSessionId}
              />
            }
          />
          <Route
            path="/sessions"
            element={<Sessions setCurrentId={setCurrentId} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/reset-password/:id" element={<ResetPassword/>} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route
            path="/class"
            element={<Class setAddSessionId={setAddSessionId} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/queries/create" element={<CreateQueries />} />
          <Route path="/webcode" element={<Webcode />} />
          <Route path="/capstone" element={<Capstone />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/interviewTasks" element={<InterviewTasks />} />
          <Route path="/leave-applications" element={<LeaveApplications />} />
          <Route path="/mock-interview" element={<MockInterview />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default Sidebar
