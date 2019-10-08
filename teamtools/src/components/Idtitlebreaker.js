import React, { Component } from 'react'
import Firstimage from '../firstimage.png'
import Secondimage from '../secondimage.png'


class Idtitlebreaker extends React.Component {

   state = {
       message: ''
   }
      

   //im not sure how to call this function when the submit handler is called
    splitFunc = (message) =>  {
        var firstWords = [];
            for (var i=0;i<codelines.length;i++)
            {
            var words = codelines[i].split(" ");
            firstWords.push(words[0]);
            }
        console.log(firstWords)
    }

    handleFormSubmit = (event) => {
    event.preventDefault();
    this.state.message.splitFunc(this.state.message);
    console.log(this.state.message);
    //call splitFunc here? with state message
    }

    render(){
        return(
            <div className="container">
                <h4 className="center">ID Title breaker</h4>
                <h5>How to use?</h5>
                <p>Break the title from the body, to be pasted from the rally website to the xl sheet on sharepoint. \n i initially thought it was a good idea but after thinking it through i dotn think it will increase the team's efficiency, however im still gonna implement it just to practise my react/redux.</p>
                
                <div className='row'>
                    <div className='col s6 container displayimage'>
                        <img src={Firstimage} alt="first image"/>
                    </div>

                    <div className='col s6 container displayimage'>
                        <img src={Secondimage} alt="first image"/>
                    </div>
                </div>
                

                <form className="center">
                    <label className="center">Input the entire text:</label>

                    <textarea id="textarea1" className="materialize-textarea" value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })}></textarea>
                     <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
                </form>

                <div className='row center container'>
                    <div className='col s4 card'>
                        <label>First output</label>
                    </div>

                    <div className='col s4 card'>
                         <label>First output</label>
                    </div>

                    <div className='col s4 card'>
                         <label>First output</label>
                    </div>
                </div>
            </div>
        )

    }
}

export default Idtitlebreaker