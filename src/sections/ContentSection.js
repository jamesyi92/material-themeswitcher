import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

const cardsData = [
	{
		title: 'Item One',
		copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia'
	},
	{
		title: 'Item Two',
		copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia'
	},
	{
		title: 'Item Three',
		copy: 'A small river named Duden flows by their place and supplies it with the necessary regelialia'
	}

]

const Section = styled.section`
	padding: 90px 0;
	background: ${props => props.theme.backgroundAccent};
`

const StyledBox = styled(Box)`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
	grid-gap: 30px;
`

const StyledCard = styled(Card)`
	&& {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		align-items: center;
		min-height: 300px;
		background-color: ${props => props.theme.background};
		padding: 30px;
	}
`

const CardTitle = styled.h3`
	font-size: 18px;
	line-height: 1.1;
	margin-bottom: 16px;
	margin-top: 0;
	color: ${props => props.theme.color}
`
const CardCopy = styled.p`
	font-size: 16px;
	line-height: calc(25/16);
	color: ${props => props.theme.color}
	margin: 0;
`

const ContentSection = () => {
	return(
		<Section>
			<Container maxWidth="md">
				<StyledBox>
					{cardsData.map((card, index) => {
						return(
							<StyledCard key={index}>
								<CardTitle>
									{card.title}
								</CardTitle>
								<CardCopy>
									{card.copy}
								</CardCopy>
							</StyledCard>
						)
					})}
				</StyledBox>
			</Container>
		</Section>
	)
}

export default ContentSection;