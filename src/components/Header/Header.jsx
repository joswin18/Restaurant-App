import React from 'react';
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CustomButton from '../CustomButton/CustomButton';

function Header() {
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

    return (
        
        <Box>
            
            <Box>
                <NavBarLinksBox>
                    {nav_titles.map((item, index) => (
                        <NavBarLink key={index}  variant='body2'>
                            {item.display}
                        </NavBarLink>
                    ))}
                </NavBarLinksBox>
            </Box>
            <Box>
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
