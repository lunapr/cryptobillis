/** @format */

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const defaultTheme = createTheme({});

const { breakpoints } = defaultTheme;

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: [
      "Commissioner",
      "Roboto",
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "transparent",
          "& .slick-prev:before, .slick-next:before": {
            color: "#000",
          },
        },
        h1: {
          fontSize: 114,
          [breakpoints.down("sm")]: {
            fontSize: 96,
          },
          [breakpoints.down("xs")]: {
            fontSize: 80,
          },
        },
        h2: {
          fontSize: 96,
          [breakpoints.down("sm")]: {
            fontSize: 64,
          },
          [breakpoints.down("xs")]: {
            fontSize: 48,
          },
        },
        h3: {
          fontSize: 72,
          [breakpoints.down("sm")]: {
            fontSize: 56,
          },
          [breakpoints.down("xs")]: {
            fontSize: 40,
          },
        },
        h4: {
          fontSize: 40,
          [breakpoints.down("sm")]: {
            fontSize: 32,
          },
          [breakpoints.down("xs")]: {
            fontSize: 28,
          },
        },
        h5: {
          fontSize: 32,
          [breakpoints.down("sm")]: {
            fontSize: 28,
          },
          [breakpoints.down("xs")]: {
            fontSize: 24,
          },
        },
        h6: {
          fontSize: 28,
          [breakpoints.down("sm")]: {
            fontSize: 24,
          },
          [breakpoints.down("xs")]: {
            fontSize: 20,
          },
        },
        p: {
          fontSize: 16,
          [breakpoints.down("sm")]: {
            fontSize: 15,
          },
          [breakpoints.down("xs")]: {
            fontSize: 14,
          },
        },
        ul: {
          fontSize: 18,
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
        fontSize: 114,
        [breakpoints.down("sm")]: {
          fontSize: 96,
        },
        [breakpoints.down("xs")]: {
          fontSize: 80,
        },
      },
      h2: {
        fontSize: 96,
        [breakpoints.down("sm")]: {
          fontSize: 64,
        },
        [breakpoints.down("xs")]: {
          fontSize: 48,
        },
      },
      h3: {
        fontSize: 72,
        [breakpoints.down("sm")]: {
          fontSize: 56,
        },
        [breakpoints.down("xs")]: {
          fontSize: 40,
        },
      },
      h4: {
        fontSize: 40,
        [breakpoints.down("sm")]: {
          fontSize: 32,
        },
        [breakpoints.down("xs")]: {
          fontSize: 28,
        },
      },
      h5: {
        fontSize: 32,
        [breakpoints.down("sm")]: {
          fontSize: 28,
        },
        [breakpoints.down("xs")]: {
          fontSize: 24,
        },
      },
      h6: {
        fontSize: 28,
        [breakpoints.down("sm")]: {
          fontSize: 24,
        },
        [breakpoints.down("xs")]: {
          fontSize: 20,
        },
      },
      subtitle1: {
        fontSize: 24,
        [breakpoints.down("sm")]: {
          fontSize: 20,
        },
        [breakpoints.down("xs")]: {
          fontSize: 19,
        },
      },
      subtitle2: {
        fontSize: 20,
        [breakpoints.down("sm")]: {
          fontSize: 19,
        },
        [breakpoints.down("xs")]: {
          fontSize: 18,
        },
      },
      body1: {
        fontSize: 18,
        [breakpoints.down("sm")]: {
          fontSize: 17,
        },
        [breakpoints.down("xs")]: {
          fontSize: 16,
        },
      },
      body2: {
        fontSize: 16,
        [breakpoints.down("sm")]: {
          fontSize: 15,
        },
        [breakpoints.down("xs")]: {
          fontSize: 14,
        },
      },
    },
    MuiAppBar: {
      root: {
        backgroundColor: "#161616 !important",
      },
      // colorPrimary:{
      //   backgroundColor:'#000 !important',
      // }
    },
    MuiButton: {
      root: {
        textTransform: "uppercase",
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
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
