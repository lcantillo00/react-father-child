import React from 'react';
import {children,numberVotes}from '../data.js';

class Child extends React.Component{
    constructor(props){
        super(props);
        this.handleNumbVotes=this.handleNumbVotes.bind(this);

    }
handleNumbVotes(){
    this.props.onVote(this.props.id);
}

    render(){
// console.log(this.props.handleNumbVotes);

        return(

            <div className="childInfo">
                <ul>
                    <li>
                        <div className="id">{this.props.id}</div>
                        <div className="firstName">{this.props.firstName}</div>
                        <div className="lastName">{this.props.lastName}</div>
                        <div className="gender">{this.props.gender}</div>
                         <img src={this.props.img} className="picimg"/>
                        <div className="countV">
                            <button  className="btnVotes" onClick={this.handleNumbVotes}>Age^^^</button>
                             {this.props.votes}
                        </div>

                        {/* <img src={require(`../pics/child1.jpg`)}/> */}

                    </li>
                    <select className="coolOrN" >
                        <option value="Cool">Cool</option>
                        <option value="Not cool">Not Cool</option>
                    </select>
                </ul>

            </div>

        );
    }
}

class FatherChild extends React.Component{
    constructor(props){
        super(props);
        this.state={
            child:[]
        }
        this.handleChildUpVotes=this.handleChildUpVotes.bind(this);
      }


    componentDidMount(){
        this.setState({child:children});

    }

    handleChildUpVotes(childIds){
        const nextChild=this.state.child.map((child)=>{
            if(child.id === childIds){
                return Object.assign({},child,{
                    votes:child.votes + 1
                });
            }else{
                return child;
            }
        });
        console.log(nextChild);
        this.setState({
            child:nextChild
        });
}

    render(){
        // console.log(this.state.child);

        const sortedVotes=this.state.child.sort((a,b)=>(
            b.votes - a.votes
        ));

            const displayInfo=this.state.child.map((child)=>(
                <Child
                    key={'child-'+ child.id}
                    id={child.id}
                    firstName={child.firstName}
                    lastName={child.lastName}
                    gender={child.gender}
                    img={child.img}
                    onVote={this.handleChildUpVotes}
                    votes={child.votes}

                />
            ));

        return(
            <div className="item">
                {displayInfo}
            </div>

        );



    }


}
export default FatherChild;
