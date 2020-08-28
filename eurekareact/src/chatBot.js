import React, {Component} from 'react';
import ChatBot,{Loading} from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components';
import Box from "@material-ui/core/Box";

class Response extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            text: '',
            answer: '',
            status: '',
            trigger: false,
        };

        this.triggetNext = this.triggetNext.bind(this);
    }

    componentWillMount() {
        const {steps} = this.props;
        const query = steps.query.value;
        fetch('http://39.100.119.153:9090/xiaoan/xiaoan/', {
            method: 'POST',
            headers: {
                 'Access-Control-Allow-Origin': "*"
            },
            body: JSON.stringify({
                "que": query,
                "status":'1'
            })
        }).then(res => res.text()).then(res => this.setState({loading: false, text: JSON.parse(res).data.text,answer:JSON.parse(res).data.answer,status:JSON.parse(res).data.status}));
    }

    triggetNext() {
        this.setState({trigger: true}, () => {
            this.props.triggerNextStep();
        });
    }

    render() {
        const {trigger, loading, text, answer,status} = this.state;
        return (
            <Box>
                {loading ? <Loading/> : text}
            </Box>
        )
    };
}

export default function ChatbotPage(props) {
    const theme = {
        background: '#FFFFFF',
        fontFamily: 'Helvetica Neue',
        botBubbleColor :'#F6F6F6',
        botFontColor:'#282828',
        optionBubbleColor:'#F6F6F6',
        optionFontColor:'#282828',
        userBubbleColor:'#6B3E9E',
        userFontColor:'#FFFFFF',
        customLoadingColor: '#F6F6F6',
    };

    const contentStyle={
        padding:"25px",
        overflowY:"auto",
    };


    const submitButtonStyle={
        fill:"#6B3E9E",
        right: 15,
        top:5,
    };

    const inputStyle={
        margin:8,
        backgroundColor:"#F6F6F6",
        width: "98%",
        height:"98%",
        paddingRight:15,
        borderBottomLeftRadius:"5px",
        borderBottomRightRadius:"5px",
        borderRadius:"5px",
    };

    const style={
        boxShadow:'0 0 0 0' ,
    };


    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                steps={[
                    // {
                    //     id: '1',
                    //     message: "Hello! I'm a adminor created from a HTML form. Can I show you some features? ",
                    //     trigger: '2',
                    // },
                    // {
                    //     id: '2',
                    //     options: [
                    //         { value: 1, label: 'Yes', trigger: '3'},
                    //         { value: 2, label: 'No', end:true  },
                    //     ],
                    // },
                    // {
                    //     id: '3',
                    //     message: "Alright! First, tell me your full name, please. ",
                    //     trigger: '4',
                    // },
                    // {
                    //     id: '4',
                    //     user: true,
                    //     trigger: '5',
                    // },
                    // {
                    //     id: '5',
                    //     message: "Howdy, {previousValue}! It's a pleasure to meet you. ",
                    //     trigger: '6',
                    //     end:false,
                    // },
                    // {
                    //     id: '6',
                    //     message: "This plugin supports multi-select too. Let's see an example. ",
                    //     trigger: '7',
                    //     end :false,
                    // },
                    // {
                    //     id: '7',
                    //     message: "What kind of music do you like? ",
                    //     trigger: '8',
                    // },
                    // {
                    //     id: '8',
                    //     user:true,
                    //     trigger: '9',
                    // },
                    // {
                    //     id: '9',
                    //     message: "So, are you a programmer? ",
                    //     trigger: '10',
                    // },
                    // {
                    //     id: '10',
                    //     options: [
                    //         { value: 1, label: 'Yes',trigger: 'start'},
                    //         { value: 2, label: 'No',trigger: 'start'},
                    //     ],
                    // },
                    {
                        id: 'start',
                        message: '请问您想知道什么',
                        trigger: 'query',
                    },
                    {
                        id: 'query',
                        user: true,
                        trigger: 'response',
                    },
                    {
                        id: 'response',
                        component: <Response/>,
                        asMessage: true,
                        trigger: 'query',
                    },
                ]}
                hideHeader={"true"}
                hideBotAvatar={"true"}
                hideUserAvatar={"true"}
                width={"100%"}
                contentStyle={contentStyle}
                placeholder={'Type Here'}
                height={"622px"}
                submitButtonStyle={submitButtonStyle}
                inputStyle={inputStyle}
                style={style}
            />
        </ThemeProvider>
    )
}

