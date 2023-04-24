import browser from 'webextension-polyfill'

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import './index.css'

export const DefaultPopup = () => {

    useEffect(() => {

        console.log('options useEffect:');

    }, []);


    return (
        <>
            <div id="DefaultPopup">
                DefaultPopup
            </div>
        </>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <DefaultPopup />
    </React.StrictMode>,
    document.getElementById("root")
);
