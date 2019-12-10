import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';

const Section = styled.footer`
	padding: 30px 0;
	background: ${props => props.theme.footerBg};
`

const Copyright = styled.span`
	color: ${props => props.theme.color};
	font-size: 17px;
	margin: 0;
	padding: 0;
`

const Footer = () => {
	return(
		<Section>
			<Container maxWidth="lg">
				<Copyright>
					&copy; { new Date().getFullYear() } James Yi
				</Copyright>
			</Container>
		</Section>
	)
}

export default Footer;