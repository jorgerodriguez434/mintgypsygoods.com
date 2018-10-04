import React from "react";
import Header from "./header";
import MainContent from "./main-content";

export default class Home extends React.Component {

    render = () => {
        return (
            <div> 
                <Header/>
                <MainContent/>
            </div>
        );
    }

}