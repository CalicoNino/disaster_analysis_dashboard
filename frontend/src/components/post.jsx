import React, { Component } from 'react';

class Posts extends Component {
    state = { 
        time: new Date().toLocaleString()
    }

    priorityBgColor = (priority) => {
        switch (priority) {
            case 'Critical':
                return 'col-sm-2 card text-light mx-3 bg-danger font-weight-bold'
            case 'High':
                return 'col-sm-2 card text-light mx-3 bg-warning font-weight-bold'
            case 'Medium':
                return 'col-sm-2 card text-light mx-3 bg-primary font-weight-bold'
            case 'Low':
                return 'col-sm-2 card text-light mx-3 bg-success font-weight-bold'
            default:
                return 'col-sm-2 card text-light mx-3 bg-dark font-weight-bold'
        }
    }

    typeEmoji = (type) => {
        switch (type) {
            case 'Fire':
                return 'Fire 🔥'
            case 'Flood':
                return 'Flood 🌊'
            case 'Power':
                return 'Power ⚡'
            case 'Medical':
                return 'Medical ⚕️'
            default:
                return type;
        }
    }

    getTime = () => {
        const time = new Date().toLocaleString();
        this.setState({time})
    } 

    render() { 
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='card text-dark my-3'>
                        <img width='150px' height='150px' src={this.props.image} alt={this.props.name} />
                    </div>

                    <div className='col-sm-10 card text-light bg-secondary my-3'>
                        <div className='row my-3'>
                            <div className='col-sm-5 card bg-dark text-light'>
                                {this.props.name}
                            </div>
                            
                            <div className={this.priorityBgColor(this.props.priority)}>
                                {this.props.priority}
                            </div> 

                            <div className='col-sm-2 text-light text-center font-weight-bold mx-2'>
                                {this.typeEmoji(this.props.problem)}
                            </div>

                            <div className='col float-right text-light mx-3'>
                                <small>{this.state.time}</small>
                            </div>
                        </div>
                        <div height='100%' className='row-sm- h-100 card bg-light text-dark my-2'>
                            <div className='col-sm-12 bg-light text-dark'>
                                {this.props.content}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Posts;