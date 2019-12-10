import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import HeroBG from '../images/hero.jpg';

const Section = styled.section`
	padding: 90px 0;
	background: ${props => props.theme.backgroundAccent};
`

const StyledTypography = styled(Typography)`
	&& {
		color: ${props => props.theme.color};
		margin-bottom: 30px;
	}
`

const GridWrap = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(3, 200px);
	grid-gap: 30px;
`

const StyledCard = styled(Card)`
	&& {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 30px;
		color: #ffffff;
		background: url(${HeroBG});
		background-size: cover;
		background-position: center;
		z-index: 1;
		
		h3 {
			margin-top: 0;
			margin-bottom: 15px;
		}
		
		p {
			margin: 0;
		}

		&:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background: ${props => props.theme.gridBg};
			opacity: .9;
			z-index: -1;
		}

		&:nth-child(3) {
			grid-column: 3 / -1;
	  	grid-row: 1 / 3;
		}

		&:nth-child(4) {
			grid-column: 1 / 3;
	  	grid-row: 2 / -1;
		}
	}
`

const GridSection = () => {
	return(
		<Section>
			<Container maxWidth="md">
				<Box textAlign="center">
					<StyledTypography variant="h4" component="h2">Eligendi reiciendis in vero</StyledTypography>
				</Box>
				<GridWrap>
					<StyledCard><h3>Some are touting this as the bank</h3><p>Far far away, behind the word mountains, far from the countries Vokalia.</p></StyledCard>
					<StyledCard><h3>Some are touting this as the bank</h3><p>Far far away, behind the word mountains, far from the countries Vokalia.</p></StyledCard>
					<StyledCard><h3>Some are touting this as the bank</h3><p>Far far away, behind the word mountains, far from the countries Vokalia.</p></StyledCard>
					<StyledCard><h3>Some are touting this as the bank</h3><p>Far far away, behind the word mountains, far from the countries Vokalia.</p></StyledCard>
					<StyledCard><h3>Some are touting this as the bank</h3><p>Far far away, behind the word mountains, far from the countries Vokalia.</p></StyledCard>
					<StyledCard><h3>Some are touting this as the bank</h3><p>Far far away, behind the word mountains, far from the countries Vokalia.</p></StyledCard>
				</GridWrap>
			</Container>
		</Section>
	)
}

export default GridSection;