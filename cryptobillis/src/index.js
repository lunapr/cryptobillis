import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter} from 'react-router-dom'

const defaultTheme = createTheme({});

const { breakpoints } = defaultTheme;

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Titillium Web',
      'Roboto',
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      //   '@global': {
      //     '*::-webkit-scrollbar': {
      //         width: 12,
      //         background: 'linear-gradient(180deg, #444444 0%, #2F2F2F 49.48%, #1D1D1D 100%)',
      //         borderRadius: 50,
      //     },
      //     // '*::-webkit-scrollbar-track': {
      //     //     height: 20,
      //     // },

      //     '*::-webkit-scrollbar-thumb': {
      //         background: 'linear-gradient(93.69deg, #E4E09E 1.23%, #F7F0C0 51.12%, #C4B46C 103.14%)',
      //         borderRadius: 50,
      //         outline: 'none',
      //         //   outline: '1px solid slategrey'
      //     },
      // },
      "@global": {
        // '*::-webkit-scrollbar': {
        //   width: 12,
        //   background: 'linear-gradient(180deg, #444444 0%, #2F2F2F 49.48%, #1D1D1D 100%)',
        //   borderRadius: 50,
        // },
        // // '*::-webkit-scrollbar-track': {
        // //     height: 20,
        // // },

        // '*::-webkit-scrollbar-thumb': {
        //   background: 'linear-gradient(93.69deg, #E4E09E 1.23%, #F7F0C0 51.12%, #C4B46C 103.14%)',
        //   borderRadius: 50,
        //   outline: 'none',
        //   //   outline: '1px solid slategrey'
        // },
        body: {
          // overflow: 'auto',
          // paddingRight:'0px !important',
          fontFamily: 'Montserrat',
          backgroundColor: 'transparent',
          '& .slick-prev:before, .slick-next:before': {
            color: '#000',
          }
        },
        h1: {
          fontSize: 48,
          [breakpoints.down("sm")]: {
            fontSize: 40,
          },
          [breakpoints.down("xs")]: {
            fontSize: 32,
          },
          fontFamily: 'Commissioner',
        },
        h2: {
          fontSize: 36,
          fontFamily: 'Commissioner',
          [breakpoints.down("sm")]: {
            fontSize: 32,
          },
          [breakpoints.down("xs")]: {
            fontSize: 28,
          },
        },
        h3: {
          fontSize: 32,
          fontFamily: 'Commissioner',
          [breakpoints.down("sm")]: {
            fontSize: 28,
          },
          [breakpoints.down("xs")]: {
            fontSize: 24,
          },
        },
        h4: {
          fontSize: 28,
          fontFamily: 'Commissioner',
          [breakpoints.down("sm")]: {
            fontSize: 24,
          },
          [breakpoints.down("xs")]: {
            fontSize: 20,
          },
        },
        h5: {
          fontSize: 24,
          fontFamily: 'Titillium Web',
          [breakpoints.down("sm")]: {
            fontSize: 21,
          },
          [breakpoints.down("xs")]: {
            fontSize: 18,
          },
        },
        h6: {
          fontSize: 20,
          fontFamily: 'Titillium Web',
          [breakpoints.down("sm")]: {
            fontSize: 18,
          },
          [breakpoints.down("xs")]: {
            fontSize: 16,
          },
        },
        p: {
          fontSize: 16,
          fontFamily: 'Titillium Web',
          [breakpoints.down("sm")]: {
            fontSize: 15,
          },
          [breakpoints.down("xs")]: {
            fontSize: 14,
          },
        },
        ul: {
          fontSize: 18,
          fontFamily: 'Titillium Web',
          [breakpoints.down("sm")]: {
            fontSize: 17,
          },
          [breakpoints.down("xs")]: {
            fontSize: 16,
          },
        },
      },
    },
    MuiTypography: {
      h1: {
        fontSize: 48,
        // fontFamily: 'Titillium Web',
        fontFamily: 'Commissioner',
        [breakpoints.down("sm")]: {
          fontSize: 40,
        },
        [breakpoints.down("xs")]: {
          fontSize: 32,
        },
      },
      h2: {
        fontSize: 36,
        // fontFamily: 'Titillium Web',
        fontFamily: 'Commissioner',
        [breakpoints.down("sm")]: {
          fontSize: 32,
        },
        [breakpoints.down("xs")]: {
          fontSize: 28,
        },
      },
      h3: {
        fontSize: 32,
        // fontFamily: 'Titillium Web',
        fontFamily: 'Commissioner',
        [breakpoints.down("sm")]: {
          fontSize: 28,
        },
        [breakpoints.down("xs")]: {
          fontSize: 24,
        },
      },
      h4: {
        fontSize: 28,
        // fontFamily: 'Titillium Web',
        fontFamily: 'Commissioner',
        [breakpoints.down("sm")]: {
          fontSize: 24,
        },
        [breakpoints.down("xs")]: {
          fontSize: 20,
        },
      },
      h5: {
        fontSize: 24,
        // fontFamily: 'Titillium Web',
        fontFamily: 'Commissioner',
        [breakpoints.down("sm")]: {
          fontSize: 21,
        },
        [breakpoints.down("xs")]: {
          fontSize: 18,
        },
      },
      h6: {
        fontSize: 20,
        // fontFamily: 'Titillium Web',
        fontFamily: 'Commissioner',
        [breakpoints.down("sm")]: {
          fontSize: 18,
        },
        [breakpoints.down("xs")]: {
          fontSize: 16,
        },
      },
      subtitle1: {
        fontSize: 18,
        // fontFamily: 'Titillium Web',
        fontFamily: 'Commissioner',
        [breakpoints.down("sm")]: {
          fontSize: 17,
        },
        [breakpoints.down("xs")]: {
          fontSize: 16,
        },
      },
      subtitle2: {
        fontSize: 16,
        // fontFamily: 'Titillium Web',
        fontFamily: 'Commissioner',
        [breakpoints.down("sm")]: {
          fontSize: 15,
        },
        [breakpoints.down("xs")]: {
          fontSize: 14,
        },
      },
      body1: {
        fontSize: 16,
        // fontFamily: 'Titillium Web',
        fontFamily: 'Commissioner',
        [breakpoints.down("sm")]: {
          fontSize: 15,
        },
        [breakpoints.down("xs")]: {
          fontSize: 14,
        },
      },
      body2: {
        fontSize: 14,
        // fontFamily: 'Titillium Web',
        fontFamily: 'Commissioner',
        [breakpoints.down("sm")]: {
          fontSize: 13,
        },
        [breakpoints.down("xs")]: {
          fontSize: 12,
        },

      },

    },
    MuiAppBar: {
      root: {
        backgroundColor: '#161616 !important',
      },
      // colorPrimary:{
      //   backgroundColor:'#000 !important',
      // }
    },
    MuiButton: {
      root: {
        textTransform: 'uppercase',
        borderRadius: 0,
        // "& svg": {
        //   width: 24,
        //   [breakpoints.down("sm")]: {
        //     width: 22,
        //   },
        //   [breakpoints.down("xs")]: {
        //     width: 20,
        //   }
        // },
      },
    },
    // MuiTextField: {
    //   root: {
    //     "& input": {
    //       color: "rgba(0, 0, 0, 0.45)",
    //       fontSize: 13,
    //     },
    //     // "& input[type='date']::-webkit-calendar-picker-indicator": {
    //     //   color: 'rgba(0, 0, 0, 0)',
    //     //   opacity: 1,
    //     //   // display: 'block',
    //     //   // background: 'url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png) no-repeat',
    //     //   // width: 20,
    //     //   // height: 20,
    //     //   // borderWidth: 'thin',
    //     // },

    //     "& fieldset": {
    //       borderColor: "rgba(253, 253, 253, 0.5)",
    //       borderWidth: 1,
    //     },

    //     "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    //       borderColor: "rgba(253, 253, 253, 0.5) ",
    //     },
    //     '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
    //       borderColor: "rgba(253, 253, 253, 0.5) ",
    //     },
    //     "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    //     {
    //       borderColor: "#ba7ff5",
    //     },
    //   },
    // },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
