import React, { useEffect, useState } from "react";

interface StatusBarProps {
    ocrPercent: number
}

export function StatusBar(props: StatusBarProps) {

    useEffect(() => {

    }, []);

    return (
        <div>
            {props.ocrPercent}
        </div>
    )

}