import React from 'react';
import styled from 'styled-components';
import { MdDonutSmall } from "react-icons/md";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Section = styled.section`
	padding: 90px 0;
	background: ${props => props.theme.background};
`
const Icon = styled(MdDonutSmall)`
	font-size: 60px;
	color: ${props => props.theme.primary};
`
const Copy = styled.p`
	font-size: 17px;
	line-height: calc(30/17);
	margin-bottom: 0;
	color: ${props => props.theme.color};
`

const IntroSection = () => {
	return(
		<Section>
			<Container maxWidth="sm">
				<Box textAlign="center">
					<Icon />
					<Copy>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptatem, dolorem voluptate mollitia unde exercitationem natus aspernatur similique, fuga id non, officia ab. Doloremque amet nesciunt, mollitia, cum quia dicta!
					</Copy>
				</Box>
			</Container>
		</Section>
	)
}

export default IntroSection;