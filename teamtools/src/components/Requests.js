import React, { Component } from 'react'

//i will implement a firebase firestore here to store the data from the form, to practise firebase with react 

class Requests extends React.Component{
    
    render() {
        
        return (
            <div className="container">
                <h4 className="center">Requests for a tool</h4>
                <p>As you guys are aware, im still learning and familiarizing myself with react and redux. If you have suggestions on tools to improve the team's efficiency, do let me know and ill see if i can help.</p>
            
                <form className="center">
                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                
                    <button>Submit</button>
                </form>
            
            </div>
        )
    }
}
   


export default Requests