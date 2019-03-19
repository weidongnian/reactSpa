import * as React from 'react';
//这是home页

interface HomeInterface{
    name:string
}

export default class Home extends React.Component {
    constructor(props:HomeInterface){
        super(props)
    }
    
    public render(){
        return (
            <div>
                <p>this page of home</p>
            </div>
        );
    }
}