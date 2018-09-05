import React from 'react';
import 'typeface-fira-sans';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';


const theme = createMuiTheme({
  typography: {
		fontFamily: '"Fira Sans", "Helvetica", "Arial", sans-serif',
		fontSize: 16,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
  }
}); 

const BasicMathTheme = (props) => {
	return(
  	<MuiThemeProvider theme={theme}>    
    	{props.children}
    </MuiThemeProvider>
	)
}

export default BasicMathTheme;