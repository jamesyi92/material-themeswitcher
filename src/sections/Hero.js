import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import BrowserImg from '../images/browser.png';

const StyledSection = styled.section`
	position: relative;
	display: flex;
	align-items: start;
	padding-top: 90px;
	justify-content: center;
	height: 80vh;
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;
	margin-top: ${props => props.menuHeight}px;
	z-index: 0;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${props => props.theme.backgroundAccent};
		opacity: 1;
		z-index: -1;
	}
`

const Intro = styled(Box)`
	

	h1 {
		color: ${props => props.theme.color};
		margin-bottom: 30px;
		margin-top: 0;
		font-size: 56px;
	}

	p {
		font-size: 17px;
		color: ${props => props.theme.colorAccent};
	}
`

const Form = styled.form`
	display: grid;
	grid-template-columns: 2fr 2fr 1fr;
	grid-gap: 30px;
`
const StyledTextField = styled(TextField)`

	label {
		color: ${props => props.theme.colorAccent};
	}

	.MuiInputBase-input {
		color: ${props => props.theme.color};
	}

	.MuiInput-underline {

		&:hover:not(.Mui-disabled):before {
			border-bottom: 1px solid ${props => props.theme.primary};
		}

		&:before {
			border-bottom: 1px solid ${props => props.theme.color};
		}

	}
	
	width: 100%;
`
const StyledBrowserImg = styled.img`
	position: absolute;
	bottom: 0;
	max-width: 100%;
	width: 1040px;
	left: 50%;
	transform: translateX(-50%);
`

const Hero = ({ menuHeight }) => {


	return(
		<StyledSection menuHeight={menuHeight}>
			<Container maxWidth="md">
				<Intro component="div" textAlign="center">
					<h1>Lorem ipsum dolor sit amet</h1>
					<p>Autem saepe laboriosam consectetur totam doloribus sequi voluptates voluptatem maxime error, explicabo sunt! Deleniti debitis totam modi consequatur exercitationem aliquam itaque, numquam.</p>
				</Intro>
				<Form>
					<StyledTextField id="standard-basic" color="secondary" label="Name" />
					<StyledTextField id="standard-basic" color="secondary" label="Email" />
					<Button variant="contained" color="secondary">
					  Get Started
					</Button>
				</Form>
				<StyledBrowserImg src={BrowserImg} />
			</Container>
		</StyledSection>
	)
}

export default Hero;