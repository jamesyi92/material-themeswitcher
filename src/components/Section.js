import React from 'react';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

const StyledSection = styled.section`
	padding: 60px 0;
`

const Section = ({ children }) => {

	return(
		<StyledSection>
			<Container fixed>
				{ children }
			</Container>
		</StyledSection>
	)

}

export default Section;