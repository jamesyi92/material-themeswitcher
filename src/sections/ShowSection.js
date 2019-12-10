import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import iPadImg from '../images/ipad.png';

const Section = styled.section`
	padding: 90px 0;
	background: ${props => props.theme.background};
`

const RelativeBox = styled(Box)`
	position: relative;
`

const StyledImg = styled.img`
	max-width: 100%;
`

const StyledTypography = styled(Typography)`
	&& {
		color: ${props => props.theme.color};
		margin-bottom: 30px;
	}
`

const Popper = styled.div`
	position: absolute; 
	right: 80px;
	bottom: 10px;
`
const StyledPopBox = styled(Box)`
	max-width: 300px;
`

const IntroSection = () => {
	return(
		<Section>
			<Container maxWidth="md">
				<Box textAlign="center">
					<StyledTypography variant="h4" component="h2">Lorem ipsum dolor sit amet</StyledTypography>
				</Box>
			</Container>
			<Container maxWidth="sm">
				<RelativeBox textAlign="center">
					<StyledImg src={iPadImg} />
					<PopupState variant="popover">
			      {popupState => (
			        <Popper>
			          <Fab size="small" color="secondary" {...bindTrigger(popupState)}>
				          <AddIcon />
				        </Fab>
			          <Popover
			            {...bindPopover(popupState)}
			            anchorOrigin={{
								    vertical: 'center',
								    horizontal: 'right',
								  }}
								  transformOrigin={{
								    vertical: 'center',
								    horizontal: 'left',
								  }}
			          >
			            <StyledPopBox p={2}>
			              <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ducimus id ipsa deserunt possimus quia odit a error, nisi dolores veniam nam unde. Natus at quas, sit. Architecto, maxime iure.</Typography>
			            </StyledPopBox>
			          </Popover>
			        </Popper>
			      )}
			    </PopupState>
				</RelativeBox>
			</Container>
		</Section>
	)
}

export default IntroSection;