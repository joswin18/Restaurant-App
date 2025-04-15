import {react,useState} from 'react';
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from '../CustomButton/CustomButton';
import logoImg from '../../assets/logo1.png'

import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts"

import{
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material"
import { Block } from '@mui/icons-material';

function Header() {

    const [mobileMenu, setMobileMenu] = useState({left:false})

    const toggleDrawer = (anchor,open) =>(event) =>{
        if(event.type === "keydown" && (event.type === "Tab" || event.type === "Shift")){
            return;
        }

        setMobileMenu({...mobileMenu,[anchor]:open})
    }

    const list = (anchor) =>{
        return (
        <Box sx={{
            width:anchor === "top" || anchor === "bottom" ? 'auto' : 250
        }}
        role="presentation"
        onClick={toggleDrawer(anchor,false)}
        onKeyDown = {toggleDrawer(anchor,false)}
        >
            
            <List>
                 {
                    nav_titles.map((item,index)=>(
                        <ListItem key={item.index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {
                                    index === 0 && <HomeIcon/>
                                }
                                {
                                    index === 1 && <FeaturedPlayListIcon/>
                                }
                                {
                                    index === 2 && <MiscellaneousServicesIcon/>
                                }
                                {
                                    index === 3 && <ContactsIcon/>
                                }
                                
                            </ListItemIcon>
                            <ListItemText primary={item.display} />
                        </ListItemButton>
                    </ListItem>
                    ))
                 }
                    
            </List>
        </Box>
        )
    }
    const nav_titles = [
        { path: '/', display: 'Home' },
        { path: '/', display: 'Dishes' },
        { path: '/', display: 'Services' },
        { path: '/', display: 'About Us' }
    ];

    const NavBarLinksBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }));

    const NavBarLink = styled(Typography)(() => ({
        fontSize:'16px',
        color:'#4F5361',
        fontWeight:'bold',
        cursor:'pointer',
        '&:hover':{
            color:'#fff'
        }
        
    }));

    const NavBarLogo = styled('img')(({theme}) => ({
        cursor:'pointer',
        width:'80px', 
        margin:'0',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
        
    }));

    const CustomMenuIcon = styled(MenuIcon)(({theme}) => ({
        cursor:'pointer',
        display:'none',
        marginRight:theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            display: 'block'
        }
        
    }));

    return (
        
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between' , padding:'40px', maxWidth:'auto',backgroundColor:'#FED801',marginLeft:'0px',marginBottom:'-24px'}} >
            
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:'2.5rem'}}>
                
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <CustomMenuIcon onClick={toggleDrawer("left",true)}/>

                    <Drawer
                    anchor='left'
                    open={mobileMenu["left"]}
                    onClose={toggleDrawer("left",false)}
                    >
                    {
                        list('left')
                    }
                    </Drawer>
                    <NavBarLogo src={logoImg} alt="SpiceKart" />
                </Box>

                <NavBarLinksBox>
                    {nav_titles.map((item, index) => (
                        <NavBarLink key={index}  variant='body2'>
                            {item.display}
                        </NavBarLink>
                    ))}
                </NavBarLinksBox>
            </Box>
            
            <Box sx={{display:'flex', alignItems:'center',justifyContent:'center' ,gap:'1.6rem'}}>
            <NavBarLink variant='body2'>
                Sign Up
            </NavBarLink>
            <CustomButton
            backgroundColor='#0F1B4C'
            color='#fff'
            buttonText='Register'
            />
            </Box>
        </Box>
    );
}

export default Header;
