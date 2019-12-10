import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Logo = styled.h3`
	font-size: 24px;
	flex-grow: 1;
`

const Menu = ({ changeTheme, setHeight, isDarkMode }) => {


	useEffect(() => {
    setHeight(ref.current.clientHeight);
  })

  const ref = useRef(null);

	return(
		<AppBar 
			position="fixed"
			ref={ref}
		>
		  <Toolbar>
		    <Logo>ThemeSwitcher</Logo>
		    <Button 
		    	onClick = {() => {
			    	changeTheme();
			    }}
		    	variant="contained" 
		    	color="secondary"
		    >
		    	{isDarkMode ? 'Light Theme' : 'Dark Theme'}
		    </Button>
		  </Toolbar>
		</AppBar>
	)
}

export default Menu;