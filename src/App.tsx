import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Books from './pages/Books';
import Form from './components/Form/Form';



const drawerWidth = 240;

const MenuData = [
  {name:"Books", link:"/book", icon:<InboxIcon />},
  {name:"Forms", link:"/form", icon:<InboxIcon />},
  {name:"QRCode", link:"/qr", icon:<InboxIcon />}
]

function App() {
  
  return(
    
    <Router>

    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <List>
        {MenuData.map((value) => (
          <Link to={value.link} style={{textDecoration:"unset", color:'black'}}>
            <ListItem key={value.name}>
              <ListItemButton>
                <ListItemIcon>
                  {value.icon}
                </ListItemIcon>
                <ListItemText primary={value.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >

        <Routes>
          <Route path="/" element={<h1>Acceuil</h1>}/>
          <Route path="/book" element={<Books />}/>
          <Route path="/book/:id" element={<Form />}/>
          <Route path="/form" element={<Form />}/>
          <Route path="/qr" element={<h1>qr</h1>}/>
          <Route path="*" element={<h1>SA EXISTE PO</h1>}/>
        </Routes>
    </Box>
  </Box>
    
  </Router>
  )

}

export default App;