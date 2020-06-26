import React, {Component} from "react";
import Cover from "../cover";
import "./body.scss";
import About from "../about";
import Skills from "../skills";
import Portfolio from "../portfolio";
import Contact from "../contact";
import Blog from "../blog";

export default class Body extends Component{
    render = () => {
        return (<div className="body">
            <Cover />
            <About />
            <Skills />
            <Portfolio />
            <Blog />
            <Contact />
        </div>);
    };
}

