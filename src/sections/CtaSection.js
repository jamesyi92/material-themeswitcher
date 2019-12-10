import React from 'react';
import styled, { css } from 'styled-components';
import { MdTimeline, MdTouchApp } from "react-icons/md";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Section = styled.section`
	padding: 90px 0;
	background: ${props => props.theme.background};
`
const GridBox = styled(Box)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 30px;

	>div {
		padding: 30px;
	}
`

const IconStyle = css`
	font-size: 60px;
	color: ${props => props.theme.primary};
`

const Icon1 = styled(MdTimeline)`
	${IconStyle}
`
const Icon2 = styled(MdTouchApp)`
	${IconStyle}
`
const Copy = styled.p`
	font-size: 17px;
	line-height: calc(30/17);
	margin-bottom: 30px;
	color: ${props => props.theme.color};
`

const StyledTypography = styled(Typography)`
	&& {
		color: ${props => props.theme.color};
		margin-bottom: 30px;
	}
`

const CtaSection = () => {
	return(
		<Section>
			<Container maxWidth="md">
				<Box textAlign="center">
					<StyledTypography variant="h4" component="h2">Recusandae, consectetur rem iste</StyledTypography>
				</Box>
				<GridBox textAlign="center">
					<div>
						<Icon1 />
						<Copy>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptatem, dolorem voluptate.
						</Copy>
						<Button variant="contained" color="secondary">
						  Call to Action
						</Button>
					</div>
					<div>
						<Icon2 />
						<Copy>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptatem, dolorem voluptate.
						</Copy>
						<Button variant="contained" color="secondary">
						  Call to Action
						</Button>
					</div>
				</GridBox>
			</Container>
		</Section>
	)
}

export default CtaSection;