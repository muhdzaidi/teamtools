import React, { Component } from 'react'
import Bee from '../bee.png'
import { Link, Navlink } from 'react-router-dom'


class Home extends Component {
    render (){
        return (
            <div className="con">
                <div className="row center container">
                    <div className="col s6 card">
                    <img src={Bee} alt="Bumblebee"/>
                        <Link to='/Idtitlebreaker'>     
                            <div className="card-content">
                                <h5>ID and Title Breaker</h5>        
                            </div>
                        </Link>
                    </div>

                   <div className="col s6 card">
                    <img className="center" src={Bee} alt="Bumblebee"/>
                        <div className="card-content">
                            {/* <Link to= {'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link> */}
                            <h5>Tool number #2</h5>
                        </div>
                    </div>
                </div>
            </div>
        ) 
      }
   
}

export default Home