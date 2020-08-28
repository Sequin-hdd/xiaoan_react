import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";
import App from "./App";

function Copyright() {
    return (
        <Typography variant="body3" color="#D1D1D1" align="center" >
            {'Copyright © '}
            <Link color="inherit" href="" underline={'none'}>
                Eureka
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;