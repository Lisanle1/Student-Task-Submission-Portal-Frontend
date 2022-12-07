import styled from '@emotion/styled'

import {
  Paper,
  Typography,
  Button,
  Stack,
  Chip,
  AccordionSummary,
  Grid,
} from '@mui/material'

export const ColorButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#4b0dba',
  },
  backgroundColor: '#4b0dba',
  color: '#fff',
  fontFamily: 'DM Sans',
  fontSize: '20px',
  textTransform: 'inherit',
  fontWeight: 100,
}))

export const Responsive = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))
export const ResponsiveForm = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginTop: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
  },
}))

export const ResponsiveLogo = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('xs')]: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export const ClassHeading = styled(Paper)({
  backgroundColor: '#4b0dba',
  color: '#fff',
  boxShadow: '0 1px 10px rgb(0 0 0 / 10%)',
  borderRadius: '8px',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
})

export const SessionTiming = styled(Typography)({
  color: '#555a8f',
})

export const ContentHead = styled(Typography)({
  fontWeight: '500',
  color: '#262631',
})

export const Content = styled(Typography)({
  fontWeight: '400',
  color: '#7a7a7a',
})
export const PrereadHead = styled(Typography)({
  fontWeight: '500',
  color: '#262631',
})

export const PrereadContent = styled(Typography)({
  fontWeight: '400',
  color: '#7a7a7a',
})

export const CustomPaper = styled(Paper)({
  background: 'rgb(255, 255, 255)',
  border: '1px solid rgb(222, 222, 222)',
  boxSizing: 'border-box',
  borderRadius: '8px',
  height: 'max-content',
  boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 10px',
})

export const SessionHeading = styled(Typography)({
  fontSize: '24px',
  fontWeight: '500',
  color: '#555a8f',
})
export const QueryHeading = styled(Typography)({
  fontWeight: 500,
  fontSize: '20px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  width: '100%',
  color: '#555a8f',
})
export const QueryChip = styled(Chip)({
  backgroundColor: 'rgb(214, 255, 228)',
  color: 'rgb(6, 170, 68)',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '12px 16px',
  borderRadius: '8px',
  height: '32px',
  fontWeight: 700,
  fontSize: '12px',
  width: 'max-content',
})
export const WebcodeChip = styled(Chip)({
  backgroundColor: '#ffebd5',
  color: '#ff9a28',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  // padding: '12px 16px',
  borderRadius: '8px',
  height: '32px',
  fontWeight: 700,
  fontSize: '12px',
  width: 'max-content',
})
export const QueryTag = styled(Chip)({
  isplay: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 12px',
  height: '24px',
  background: 'rgb(247, 245, 252)',
  borderRadius: '12px',
  color: 'rgb(177, 130, 255)',
  width: 'max-content',
})
export const AdditionalSessionHeading = styled(Typography)({
  fontSize: '1.25rem',
  fontWeight: '450',
  color: '#555a8f',
})

export const RoadmapIcon = styled(Button)({
  width: '40px',
  height: '40px',
  color: 'white',
  backgroundColor: 'rgb(75, 13, 186)',
  borderRadius: '50%',
  minWidth: 0,
  minHeight: 0,
  fontWeight: '500',
  fontFamily: 'DM Sans',
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: 'rgb(75, 13, 186)',
  },
})

export const ProgressHead = styled(Stack)({
  background: 'rgb(247, 245, 252)',
  borderRadius: '8px 8px 0px 0px',
  margin: 'auto',
  padding: '10px',
})

export const ProgressHeader = styled(Typography)({
  fontWeight: '500',
  fontSize: '20px',
  color: '#555a8f',
})
export const ProgressHeader2 = styled(Typography)({
  fontWeight: '500',
  fontSize: '20px',
  color: '#555a8f',
  fontStyle: 'normal',
  lineHeight: '24px',
  color: 'rgb(126, 142, 159)',
})

export const TaskHeading = styled(Typography)({
  fontstyle: 'normal',
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '32px',
  color: 'rgb(75, 13, 186)',
})

export const CustomAccordionSummary = styled(AccordionSummary)({
  userSelect: 'auto',
  color: '#555a8f',
})

export const CustomChip = styled(Chip)({
  border: '2px solid rgb(35, 31, 32)',
  padding: '0px 12px',
  borderRadius: '80px',
  color: 'rgb(255, 255, 255)',
  backgroundColor: 'rgb(104, 186, 174)',
  width: 'max-content',
  fontSize: '1rem',
})
export const CustomChip2 = styled(Chip)({
  background: '#ffebd5',
  color: '#ff9a28',
  borderRadius: '10px',
})

export const QueryButton = styled(Button)({
  backgroundColor: 'rgb(255, 255, 255)',
  color: 'rgb(75 13 186)',
  margin: '0px',
  height: '32px',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '9px',
  borderRadius: '8px',
  border: '1px solid rgb(75, 13, 186)',
  boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 3px',
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: '16px',
  textTransform: 'capitalize',
})

export const CustomPaper3 = styled(Paper)({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'rgb(240, 239, 255)',
  height: '64px',
  width: '100%',
  padding: '16px 20px',
  borderTop: '1.5px solid rgb(222, 222, 222)',
  justifyContent: 'space-between',
})

export const TaskArea = styled(Paper)({
  border: '1px solid rgb(255, 211, 162)',
  borderRadius: '8px',
  marginTop: '20px',
  marginLeft: '30px',
  marginRight: '30px',
  marginBottom: '30px',
  padding: 50,
})

export const AttachmentButton = styled(Button)({
  width: '80px',
  height: '80px',
  padding: '28px',
  border: '1px solid rgb(75, 13, 186)',
  borderRadius: '8px',
  backgroundColor: 'rgb(255, 255, 255)',
  cursor: 'pointer',
  fontSize: '40px',
  color: 'rgb(75, 13, 186)',
})

export const CancelButton = styled(Button)({
  background: 'rgb(255, 255, 255)',
  border: '1px solid rgb(76, 13, 186)',
  boxSizing: 'border-box',
  borderRadius: '8px',
  color: 'rgb(76, 13, 186) !important',
  boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 3px',
  textTransform: 'capitalize',
  fontSize: '1rem',
  fontWeight: 400,
})

export const CreateButton = styled(Button)({
  backgroundColor: 'rgb(76, 13, 186) !important',
  border: '1px solid rgb(76, 13, 186)',
  boxSizing: 'border-box',
  borderRadius: '8px',
  color: '#fff',
  boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 3px',
  textTransform: 'capitalize',
  fontSize: '1rem',
  fontWeight: 400,
})

export const RecordingButton = styled(Button)({
  height: '48px',
  padding: '16px 24px',
  borderRadius: '8px',
  backgroundColor: 'rgb(46, 209, 108)',
  color: 'rgb(255, 255, 255)',
  display: 'flex',
  alignItems: 'center',
  fontSize: '18px',
  fontWeight: '700',
  fontFamily: 'DM Sans',
  textTransform: 'capitalize',
  border: '0px',
  boxShadow: 'rgb(0 0 0 / 60%) 2px 4px 10px',
  margin: '0px',
})

export const CustomStack = styled(Stack)({
  backgroundColor: 'rgb(255, 255, 255)',
  borderRadius: '8px',
  padding: '8px 12px',
  cursor: 'pointer',
})

export const CustomAddSessionStack = styled(Stack)({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px 12px',
  gap: '12px',
  backgroundColor: 'rgb(247, 247, 248)',
  maxHeight: '500px',
  overflowY: 'scroll',
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

export const AddSessionButton = styled(Button)({
  backgroundColor: 'rgb(255, 255, 255)',
  borderRadius: '8px',
  padding: '8px 12px',
  cursor: 'pointer',
  textTransform: 'capitalize',
  textAlign: 'start',
})

export const CustomPaper2 = styled(Paper)({
  height: '96px',
  width: '100%',
  backgroundColor: 'rgb(237, 230, 248)',
  borderRadius: '16px',
  margin: '8px 0px',
  display: 'flex',
  WebkitBoxPack: 'justify',
  justifyContent: 'space-between',
  WebkitBoxAlign: 'center',
  alignItems: 'center',
  padding: '0px 24px',
})

export const ColorButton2 = styled(Button)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#4b0dba',
  },
  backgroundColor: '#4b0dba',
  color: '#fff',
  fontFamily: 'DM Sans',
  fontSize: '15px',
  textTransform: 'inherit',
  fontWeight: 100,
}))
export const CustomFieldLabel = styled(Typography)(({ theme }) => ({
  fontFamily: 'DM Sans',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#7e8e9f',
  paddingBottom: '5px',
}))

export const modalstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  p: 1,
  display: 'flex',
  flexDirection: 'column',
  pointerEvents: 'auto',
  backgroundColor: 'rgb(255, 255, 255)',
  backgroundClip: 'padding-box',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  borderRadius: '20px',
}
