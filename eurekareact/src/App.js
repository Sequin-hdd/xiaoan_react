import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import EmojiObjectsRoundedIcon from '@material-ui/icons/EmojiObjectsRounded';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ChatbotPage from "./chatBot";
import Div100vh from 'react-div-100vh';
import Copyright from './Copyright';
import AppBar from "@material-ui/core/AppBar/AppBar";


const theme = createMuiTheme({
  palette: {
    primary: {
      light:'#6B3E9E',
      main: '#6B3E9E',
      dark: '#6B3E9E',
      contrastText: '#6B3E9E',
    },
    secondary: {
      light:'#25202D',
      main: '#25202D',
      dark: '#25202D',
      contrastText: '#25202D',
    },
  },
});

const coverChat =
    'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80';



const useStyles = makeStyles(theme => ({
      root: {
        flexGrow: 1,
        margin:'auto',
        width:'1024px',
        height:'100%',
      },
      paper: {
        height: 622,
        width: 1000,
        boxShadow:'0 12px 24px 0',
        background: 'none',
        borderBottomLeftRadius:"10px",
        borderBottomRightRadius:"10px",
        borderRadius:"10px",
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"10px",
      },
      paper1: {
        height: 622,
        width: '20%',
        borderBottomLeftRadius:"10px",
        borderBottomRightRadius:"0px",
        borderRadius:"10px",
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"0px",
      },
      paper2: {
        height: 622,
        width: '80%',
        padding: theme.spacing(0, 0),
        borderBottomLeftRadius:"0px",
        borderBottomRightRadius:"10px",
        borderRadius:"10px",
        borderTopRightRadius:"10px",
        borderTopLeftRadius:"0px",
      },
      backgroundChat:{
        width: '100%',
        textAlign: 'left',
        height: '100%',
        position: 'relative',
        background: `url(${coverChat})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        overflowX:'hidden',
        overflowY:'hidden',
      },
      backDrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.7)',
      },
      appBar: {
        background: 'none',
      },
    }

));



function TabPanel1(props) {
  const { children, value, index, ...other } = props;

  return (
      <Typography
          component="div"
          role="tabpanel"
          hidden={value !== index}
          id={`scrollable-prevent-tabpanel-${index}`}
          aria-labelledby={`scrollable-prevent-tab-${index}`}
          {...other}
      >
        <Box p={0}>{children}</Box>
      </Typography>
  );
}

TabPanel1.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function TabPanel2(props) {
  const { children, value, index, ...other } = props;

  return (
      <Typography
          component="div"
          role="tabpanel"
          hidden={value !== index}
          id={`scrollable-prevent-tabpanel-${index}`}
          aria-labelledby={`scrollable-prevent-tab-${index}`}
          {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
  );
}

TabPanel2.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}


function App(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Div100vh className={classes.backgroundChat}>
          <div className={classes.backDrop} />
          <Grid container className={classes.root} alignItems={'center'} >
            <Grid item xs={12} >
              <AppBar className={classes.appBar}  position={'relative'} elevation={0}>
                <Paper className={classes.paper}>
                    <Grid container justify="center" spacing={0} >
                      <Paper className={classes.paper1} square={"true"} style={{background:'#25202D'}}>
                        <Grid item >
                          <div style={{ padding: 16, transition: "0.3s"}} align={"center"}>
                            <Avatar
                                alt="Sandra Adams"
                                src="https://images.unsplash.com/photo-1456379771252-03388b5adf1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                style={{
                                  width:  60,
                                  height:  60,
                                  transition: "0.3s"
                                }}
                            />
                            <div style={{ paddingBottom: 16 }} />
                            <div style={{color:'#FFFFFF'}}>
                              <Typography variant={"h6"} noWrap >
                                {props.name}
                              </Typography>
                            </div>
                            <div style={{color:'#6B3E9E'}}>
                              <Typography variant={"h6"} noWrap gutterBottom >
                                User
                              </Typography>
                            </div>
                            <div style={{ paddingBottom: 30 }} />
                            <ThemeProvider theme={theme}>
                              <Tabs
                                  orientation={"vertical"}
                                  value={value}
                                  onChange={handleChange}
                                  variant="fullWidth"
                                  indicatorColor="secondary"
                                  textColor="primary"
                                  scrollButtons="off"
                                  aria-label="scrollable prevent tabs example"
                              >
                                <Tab icon={<ChatOutlinedIcon style={{color:"#FFFFFF",fontSize: 25}}/> } aria-label="chat" {...a11yProps(0)} />
                                <Tab icon={<PieChartOutlinedIcon style={{color:"#FFFFFF",fontSize: 25}}/>} aria-label="pie" {...a11yProps(1)}/>
                                <Tab icon={<EmojiObjectsRoundedIcon style={{color:"#FFFFFF",fontSize: 25}}/>} aria-label="light" {...a11yProps(2)}/>
                              </Tabs>
                            </ThemeProvider>
                          </div>
                        </Grid>
                      </Paper>
                      <Paper className={classes.paper2}>
                        <TabPanel1 value={value} index={0}>
                          <ChatbotPage />
                        </TabPanel1>
                        <TabPanel2 value={value} index={1}>
                          Item Two
                        </TabPanel2>
                        <TabPanel2 value={value} index={2}>
                          Item Three
                        </TabPanel2>
                      </Paper>
                    </Grid>
                </Paper>
                <div align={'center'}>
                      <Box mt={8} >
                          <Copyright />
                      </Box>
                </div>
              </AppBar>
            </Grid>
          </Grid>
      </Div100vh>
  );
}

export default App;
