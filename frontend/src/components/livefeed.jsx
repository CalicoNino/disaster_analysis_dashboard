import React, { Component } from 'react';
import Post from '../components/post';

class LiveFeed extends Component {
    state = { 
        low: true,
        medium: true,
        high: true,
        critical: true,
        fire: true,
        flood: true,
        power: true,
        medical: true
    }
    
    handle = (e) => {
        this.setState({[e.target.id]: e.target.checked});
    }

    render() {
        var toShow = this.props.posts;

        if (this.state.critical === false) {
            toShow = toShow.filter(i => i.priority !== 'Critical')    
        }
        if (this.state.high === false) {
            toShow = toShow.filter(i => i.priority !== 'High')    
        }
        if (this.state.medium === false) {
            toShow = toShow.filter(i => i.priority !== 'Medium')    
        }
        if (this.state.low === false) {
            toShow = toShow.filter(i => i.priority !== 'Low')    
        }
        if (this.state.fire === false) {
            toShow = toShow.filter(i => i.problem !== 'Fire')    
        }
        if (this.state.flood === false) {
            toShow = toShow.filter(i => i.problem !== 'Flood')    
        }
        if (this.state.power === false) {
            toShow = toShow.filter(i => i.problem !== 'Power')    
        }
        if (this.state.medical === false) {
            toShow = toShow.filter(i => i.problem !== 'Medical')    
        }

        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row content">
                        <div height='100%' className="col-sm-2 card text-light bg-dark my-3 sidenav">
                            <h3 className="text-left m-2">Live Feed</h3>
                            {new Date().toLocaleString()}
                            <hr/>
                            <h5 className="text-left m-2">Priority Filters</h5>
                            <div className="text-left custom-control custom-checkbox">
                                <input type="checkbox" id="critical" 
                                    onChange={this.handle} checked={this.state.critical} />
                                <label className="mx-2" for="critical">Critical</label><br/>

                                <input type="checkbox" id="high" 
                                    onChange={this.handle} checked={this.state.high} />
                                <label className="mx-2" for="high">High</label><br/>

                                <input type="checkbox" id="medium" 
                                    onChange={this.handle} checked={this.state.medium} />
                                <label className="mx-2" for="medium">Medium</label><br/>

                                <input type="checkbox" id="low"
                                    onChange={this.handle} checked={this.state.low} />
                                <label className="mx-2" for="low">Low</label><br/>                                                            
                            </div>
                            <br/>
                            <h5 className="text-left m-2">Disaster Filters</h5>
                            <div className="text-left custom-control custom-checkbox">
                                <input type="checkbox" id="fire" 
                                    onChange={this.handle} checked={this.state.fire} />
                                <label className="mx-2" for="fire">Fire 🔥</label><br/>

                                <input type="checkbox" id="flood" 
                                    onChange={this.handle} checked={this.state.flood} />
                                <label className="mx-2" for="flood">Flood 🌊</label><br/>

                                <input type="checkbox" id="power" 
                                    onChange={this.handle} checked={this.state.power} />
                                <label className="mx-2" for="power">Power ⚡</label><br/>

                                <input type="checkbox" id="medical"
                                    onChange={this.handle} checked={this.state.medical} />
                                <label className="mx-2" for="medical">Medical ⚕️</label><br/>                                                            
                            </div>
                            <hr/>
                            Total Number of Posts Viewing:
                            <br/>
                            <h3>{toShow.length}</h3>
                            
                        </div>

                        <div className="col text-left card bg-light mx-2 my-3">
                            <h4 className="text-left m-3"><small>POSTS FROM SOCIAL MEDIA</small></h4>
                            <hr/>
                            {toShow.map( 
                            ({name,image,content,problem,priority,id}) => 
                                <Post 
                                    key={id}
                                    image={image} 
                                    name={name}
                                    problem={problem}
                                    priority={priority}
                                    content={content}
                                /> 
                            )}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default LiveFeed;