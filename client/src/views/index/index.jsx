import React from 'react';
import './style.css';


export class IndexView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <span className="hello">Hello Budżetlab!</span>
        );
    }
}