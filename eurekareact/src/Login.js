import React from "react";
import Div100vh from "react-div-100vh";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {createMuiTheme, makeStyles} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import PersonIcon from '@material-ui/icons/Person';
import HttpsIcon from '@material-ui/icons/Https';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import {ThemeProvider} from "@material-ui/styles";
import App from "./App";
import Copyright from "./Copyright";
import Box from "@material-ui/core/Box";

const theme = createMuiTheme({
    palette: {
        primary: {
            light:'#894CAB',
            main: '#894CAB',
            dark: '#894CAB',
            contrastText: '#ffffff',
        },
        secondary: {
            light:'#25202D',
            main: '#25202D',
            dark: '#25202D',
            contrastText: '#25202D',
        },
    },
});

const coverLogin =
    "https://cdn.pixabay.com/photo/2019/09/18/07/09/meadow-4485609_960_720.jpg";

const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            margin:'auto',
            width:'1024px',
            height:'100%',
        },

        backgroundLogin:{
            width: '100%',
            textAlign: 'left',
            height: '100%',
            position: 'relative',
            background: `url(${coverLogin})`,
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

        paperLogin:{
            height: 400,
            width: 500,
            boxShadow:'0 12px 24px 0',
            borderBottomLeftRadius:"20px",
            borderBottomRightRadius:"20px",
            borderRadius:"20px",
            borderTopLeftRadius:"20px",
            borderTopRightRadius:"20px",
        },
        paperLoginInter:{
            height: 400,
            width: 300,
            background:'none',
            boxShadow:'0 0 0 0',
            align:'center',
            paddingLeft: 100,
        },
        appBar: {
            background: 'none',
            paddingLeft: 250,
        },
        buttonLabel: {
            textTransform: 'none',
        },
        checkbox: {
            color: '#ECE9E8',
        },
    }

));


function Login() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        "username" : localStorage.getItem("username"),
        "password" : localStorage.getItem("password"),
    });
    const [name, setName] = React.useState('Sandra Adams');
    const [response, setResponse] = React.useState('');
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    const [rememberPassword, setRememberPassword] =React.useState(0);
    const handleClick = () =>{
        setRememberPassword(!rememberPassword);
        //删除数据localStorage.removeItem('username');localStorage.clear(); // 移除所有
    };

    const login = () => {
        setName('Sandra Adams');
        if (rememberPassword==0){
            localStorage.clear();
        }else{
            localStorage.username = values.username;
            localStorage.password = values.password;
        };
        setRememberPassword(0);
        if(!values.username & !values.password){
            alert('请输入账号和密码');
            reset();
            return;
        };
        if(!values.username){
            alert('请输入账号');
            reset();
            return;
        };
        if(!values.password){
            alert('请输入密码');
            reset();
            return;
        };
        fetch('http://114.116.189.184:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                "username": values.username,
                "password": values.password,
            })
        }).then(res => res.text()).then(res => {setResponse(strToJson(res));setName(values.username);})
          .catch((error) => {
          alert("登录失败！");
          });
        setResponse('1');
    }

    function reset(){
        setRememberPassword(0);
        setValues({username:'',password:''});
    }

    function strToJson(str) {
        return JSON.parse(str);
    }


    return(
        <React.Fragment>
            {response ==='1'
                ?
                <App name={name}/>:
                <ThemeProvider theme={theme}>
                    <Div100vh className={classes.backgroundLogin}>
                        <div className={classes.backDrop} />
                        <Grid container className={classes.root} alignItems={'center'} >
                            <Grid item xs={12} >
                                <AppBar className={classes.appBar} position={'relative'} elevation={0}>
                                    <Paper className={classes.paperLogin} >
                                        <Paper className={classes.paperLoginInter} >
                                            <div style={{paddingTop:35}}>
                                                <img src={require('./brand.jpg')} width={300} />
                                            </div>
                                            <div style={{paddingTop:7}}>
                                                <Grid container spacing={1} alignItems="flex-end">
                                                    <Grid item>
                                                        <PersonIcon color={'primary'}/>
                                                    </Grid>
                                                    <Grid item>
                                                        <TextField
                                                            id="username"
                                                            name="username"
                                                            label="Username"
                                                            value={values.username}
                                                            onChange={handleChange('username')}
                                                            style={{color:'primary', width:268}} />
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <div style={{paddingTop:7}}>
                                                <Grid container spacing={1} alignItems="flex-end">
                                                    <Grid item>
                                                        <HttpsIcon color={'primary'}/>
                                                    </Grid>
                                                    <Grid item>
                                                        <TextField
                                                            id="password"
                                                            name="password"
                                                            label="Password"
                                                            value={values.password}
                                                            style={{color:'primary', width:268}}
                                                            onChange={handleChange('password')}
                                                            type="password"
                                                            autoComplete="current-password"
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <div style={{paddingTop:8}}>
                                                <Typography align={'right'} variant='body1'>
                                                    <Link color={'primary'} underline={'none'} href='' >I forget password</Link>
                                                </Typography>
                                            </div>
                                            <FormControl fullWidth>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            value={'yes'}
                                                            className={classes.checkbox}
                                                            color={'primary'}
                                                            onClick={handleClick}
                                                        />
                                                    }
                                                    label="Remember me"
                                                />
                                            </FormControl>
                                            <FormControl margin={'normal'} fullWidth>
                                                <Button
                                                    classes={{ label: classes.buttonLabel }}
                                                    fullWidth
                                                    variant={'contained'}
                                                    color={'primary'}
                                                    size={'large'}
                                                    onClick={login}
                                                >
                                                    Sign in
                                                </Button>
                                            </FormControl>
                                            <div style={{paddingTop:5}}>
                                                <Typography align={'center'} >
                                                    Don't have account yet?
                                                    <Link color={'primary'} href="" underline={'none'}> Sign up</Link>
                                                </Typography>
                                            </div>
                                        </Paper>
                                    </Paper>
                                    <div align={'center'} style={{paddingRight:280}}>
                                        <Box mt={8} >
                                            <Copyright />
                                        </Box>
                                    </div>
                                </AppBar>
                            </Grid>
                        </Grid>
                    </Div100vh>
                </ThemeProvider>
                }
        </React.Fragment>


    );
}
export default Login;
