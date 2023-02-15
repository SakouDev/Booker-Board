import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Books from './pages/Books';
import Form from './components/Form/CreateForm';
import Operation from './pages/Operation';
import Login from './pages/Login';
import { useState } from 'react';
import './App.css'
import BookDetails from './pages/BookDetails';


const drawerWidth = 240;

const MenuData = [
  {name:"Books", link:"/book", icon:<InboxIcon />},
  {name:"Forms", link:"/form", icon:<InboxIcon />},
  {name:"QRCode", link:"/qr", icon:<InboxIcon />}
]


function App() {
  
  const [logged, setLogged] = useState(false);
  const [dataCode, setDataCode] = useState('');

  return(
    
    <Router>

    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    {logged &&
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
      <img alt='logo' src='https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png' />
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
    }
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >

        {!logged ? <Login setDataCode={setDataCode} setLogged={setLogged} /> :

        <Routes>
          <Route path="/" />
          <Route path="/book" element={<Books />}/>
          <Route path="/book/:id" element={<BookDetails />}/>
          <Route path="/form" element={<Operation dataCode={dataCode} />}/>
          <Route path="/qr" element={<h1>qr</h1>}/>
          <Route path="*" element={<h1>SA EXISTE PO</h1>}/>
        </Routes>
        }
    </Box>
  </Box>
    
  </Router>
  )

}

export default App;