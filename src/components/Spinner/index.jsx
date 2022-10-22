import React from "react";
import { CirclesWithBar } from 'react-loader-spinner'
export const Spinner = ()=>{
    return(
        <CirclesWithBar
                height="100"
                width="100"
                color="#EE4343"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
                />
    )
}