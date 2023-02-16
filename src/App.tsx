import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Books from './pages/Books';
import Operation from './pages/Operation';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import './App.css'
import BookDetails from './pages/BookDetails';
import GenQR from './pages/GenQR';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import LogoutIcon from '@mui/icons-material/Logout';
import { useCookies } from 'react-cookie';

const drawerWidth = 240;


function App() {
  const [dataCode, setDataCode] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['Menfou']);

  const MenuData = [
    {name:"Books", link:"/book", icon:<MenuBookIcon />, function: () => {}},
    {name:"Forms", link:"/form", icon:<FormatListBulletedIcon />, function: () => {}},
    {name:"QRCode", link:"/qr", icon:<QrCode2Icon />, function: () => {}},
    {name:"Disconnect", link:".", icon:<LogoutIcon color='error' />, function: () => removeCookie('Menfou')}
  ]

  const isLogged = Object.keys(cookies).length !== 0;

  return(
    
    <Router>

    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    {isLogged &&
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
      <List style={{height : '100vh'}}>
        {MenuData.map((value) => (
          <Link className='LinkContainer' onClick={value.function} to={value.link} style={{textDecoration:"unset", color:'black'}}>
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
      sx={{ flexGrow: 1, bgcolor: '#eaeaea', p: 3 , height:'100vh'}}
    >

        {!isLogged ? <Login setDataCode={setDataCode} setCookie={setCookie} /> :

        <Routes>
          <Route path="/" element={<Login setDataCode={setDataCode} setCookie={setCookie} />} />
          <Route path="/book" element={<Books />}/>
          <Route path="/book/:id" element={<BookDetails />}/>
          <Route path="/form" element={<Operation dataCode={dataCode} />}/>
          <Route path="/qr" element={<GenQR />}/>
          <Route path="*" element={<h1>SA EXISTE PO</h1>}/>
        </Routes>
        }
    </Box>
  </Box>
    
  </Router>
  )

}

export default App;