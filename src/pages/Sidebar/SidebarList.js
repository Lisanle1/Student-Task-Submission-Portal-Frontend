import React from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import EventNoteIcon from '@mui/icons-material/EventNote'
import AssignmentIcon from '@mui/icons-material/Assignment'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import AppsIcon from '@mui/icons-material/Apps'
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode'
import SickIcon from '@mui/icons-material/Sick'
import GroupsIcon from '@mui/icons-material/Groups'
import BadgeIcon from '@mui/icons-material/Badge'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'

import { NavLink } from 'react-router-dom'

const SidebarList = ({ pageName, setPageName }) => {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem('token')),
  )

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor:
          'linear-gradient(124deg, rgba(131,58,180,1) 0%, rgba(165,50,138,1) 50%, rgba(170,49,132,1) 75%, rgba(192,44,105,1) 100%);',
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {user.role === 'Admin' ? (
        <>
          <NavLink
            to="/admin"
            style={{
              textDecoration: 'none',
              color: '#6c757d',
            }}
          >
            <ListItemButton
              sx={{ ':hover': { color: '#6610f2' } }}
              onClick={() => setPageName('Admin')}
            >
              <ListItemIcon
                sx={{
                  ':hover': { color: '#6610f2' },
                  overflow: 'hidden',
                }}
              >
                <AdminPanelSettingsIcon sx={{ color: 'grey' }} />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </ListItemButton>
          </NavLink>
          <NavLink
            to="/sessions"
            style={{
              textDecoration: 'none',
              color: '#6c757d',
            }}
          >
            <ListItemButton
              sx={{ ':hover': { color: '#6610f2' } }}
              onClick={() => setPageName('Sessions')}
            >
              <ListItemIcon
                sx={{
                  ':hover': { color: '#6610f2' },
                  overflow: 'hidden',
                }}
              >
                <FormatListNumberedIcon sx={{ color: 'grey' }} />
              </ListItemIcon>
              <ListItemText primary="Sessions" />
            </ListItemButton>
          </NavLink>
        </>
      ) : null}

      <NavLink
        to="/class"
        style={{
          textDecoration: 'none',
          color: '#6c757d',
        }}
      >
        <ListItemButton
          sx={{ ':hover': { color: '#6610f2' } }}
          onClick={() => setPageName('Class')}
        >
          <ListItemIcon
            sx={{
              ':hover': { color: '#6610f2' },
              overflow: 'hidden',
            }}
          >
            <AccountBoxIcon sx={{ color: 'grey' }} />
          </ListItemIcon>
          <ListItemText primary="Class" />
        </ListItemButton>
      </NavLink>

      <NavLink
        to="/dashboard"
        style={{
          textDecoration: 'none',
          color: '#6c757d',
        }}
      >
        <ListItemButton
          sx={{ ':hover': { color: '#6610f2' } }}
          onClick={() => setPageName('Dashboard')}
        >
          <ListItemIcon sx={{ ':hover': { color: '#6610f2' } }}>
            <EventNoteIcon sx={{ color: 'grey' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </NavLink>

      <NavLink to="/tasks" style={{ textDecoration: 'none', color: '#6c757d' }}>
        <ListItemButton
          sx={{ ':hover': { color: '#6610f2' } }}
          onClick={() => setPageName('Task Submissions')}
        >
          <ListItemIcon sx={{ ':hover': { color: '#6610f2' } }}>
            <AssignmentIcon sx={{ color: 'grey' }} />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItemButton>
      </NavLink>

      <NavLink
        to="/webcode"
        style={{ textDecoration: 'none', color: '#6c757d' }}
      >
        <ListItemButton
          onClick={() => setPageName('Webcode')}
          sx={{ ':hover': { color: '#6610f2' } }}
        >
          <ListItemIcon sx={{ ':hover': { color: '#6610f2' } }}>
            <EmojiEventsIcon sx={{ color: 'grey' }} />
          </ListItemIcon>
          <ListItemText primary="Webcode" />
        </ListItemButton>
      </NavLink>

      <NavLink
        to="/capstone"
        style={{ textDecoration: 'none', color: '#6c757d' }}
      >
        <ListItemButton
          sx={{ ':hover': { color: '#6610f2' } }}
          onClick={() => setPageName('Capstone')}
        >
          <ListItemIcon sx={{ ':hover': { color: '#6610f2' } }}>
            <ImportContactsIcon sx={{ color: 'grey' }} />
          </ListItemIcon>
          <ListItemText primary="Capstone" />
        </ListItemButton>
      </NavLink>
      <NavLink
        to="/queries"
        style={{ textDecoration: 'none', color: '#6c757d' }}
      >
        <ListItemButton
          sx={{ ':hover': { color: '#6610f2' } }}
          onClick={() => setPageName('My Queries')}
        >
          <ListItemIcon sx={{ ':hover': { color: '#6610f2' } }}>
            <QuestionAnswerIcon sx={{ color: 'grey' }} />
          </ListItemIcon>
          <ListItemText primary="Queries" />
        </ListItemButton>
      </NavLink>
      <NavLink
        to="/requirements"
        style={{ textDecoration: 'none', color: '#6c757d' }}
      >
        <ListItemButton
          sx={{ ':hover': { color: '#6610f2' } }}
          onClick={() => setPageName('Requirements')}
        >
          <ListItemIcon sx={{ ':hover': { color: '#6610f2' } }}>
            <PlaylistAddIcon sx={{ color: 'grey' }} />
          </ListItemIcon>
          <ListItemText primary="Requirements" />
        </ListItemButton>
      </NavLink>
      <NavLink
        to="/applications"
        style={{ textDecoration: 'none', color: '#6c757d' }}
      >
        <ListItemButton
          sx={{ ':hover': { color: '#6610f2' } }}
          onClick={() => setPageName('My Applications')}
        >
          <ListItemIcon sx={{ ':hover': { color: '#6610f2' } }}>
            <AppsIcon sx={{ color: 'grey' }} />
          </ListItemIcon>
          <ListItemText primary="Applications" />
        </ListItemButton>
      </NavLink>
      <NavLink
        to="/interviewTasks"
        style={{ textDecoration: 'none', color: '#6c757d' }}
      >
        <ListItemButton
          sx={{ ':hover': { color: '#6610f2' } }}
          onClick={() => setPageName('Task Submissions')}
        >
          <ListItemIcon sx={{ ':hover': { color: '#6610f2' } }}>
            <InterpreterModeIcon sx={{ color: 'grey' }} />
          </ListItemIcon>
          <ListItemText primary="Interviewtasks" />
        </ListItemButton>
      </NavLink>
      <NavLink
        to="/leave-applications"
        style={{ textDecoration: 'none', color: '#6c757d' }}
      >
        <ListItemButton
          sx={{ ':hover': { color: '#6610f2' } }}
          onClick={() => setPageName('Leave Applications')}
        >
          <ListItemIcon sx={{ ':hover': { color: '#6610f2' } }}>
            <SickIcon sx={{ color: 'grey' }} />
          </ListItemIcon>
          <ListItemText primary="Leave-applications" />
        </ListItemButton>
      </NavLink>
      <NavLink
        to="/mock-interview"
        style={{ textDecoration: 'none', color: '#6c757d' }}
      >
        <ListItemButton
          sx={{ ':hover': { color: '#6610f2' } }}
          onClick={() => setPageName('Mock Interview')}
        >
          <ListItemIcon sx={{ ':hover': { color: '#6610f2' } }}>
            <GroupsIcon sx={{ color: 'grey' }} />
          </ListItemIcon>
          <ListItemText primary="Mock-interview" />
        </ListItemButton>
      </NavLink>
      <NavLink
        to="/certificate"
        style={{ textDecoration: 'none', color: '#6c757d' }}
      >
        <ListItemButton
          sx={{ ':hover': { color: '#6610f2' } }}
          onClick={() => setPageName('Certificates')}
        >
          <ListItemIcon sx={{ ':hover': { color: '#6610f2' } }}>
            <BadgeIcon sx={{ color: 'grey' }} />
          </ListItemIcon>
          <ListItemText primary="Certificate" />
        </ListItemButton>
      </NavLink>
    </List>
  )
}

export default SidebarList
