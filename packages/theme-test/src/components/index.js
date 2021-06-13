import React from 'react';
import { connect } from "frontity";

const Root = ({ state }) =>
{
    return(
        <>
            <h1 style={{textAlign: "center"}}>Hello World!</h1>
            <p>Current URL: {state.router.link}</p>
        </>
    )
};

export default connect(Root);