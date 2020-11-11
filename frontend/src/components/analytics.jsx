import React, { Component } from 'react';

class Analytics extends Component {
    percentage = (total, portion) => {
        return Math.round((portion / total)*100);
    }

    render() { 
        var totalCases = this.props.posts.length;

        var totalCritical = this.props.posts.filter(i => i.priority === 'Critical').length;
        var totalHigh = this.props.posts.filter(i => i.priority === 'High').length;
        var totalMedium = this.props.posts.filter(i => i.priority === 'Medium').length;
        var totalLow = this.props.posts.filter(i => i.priority === 'Low').length;
        
        var totalFire = this.props.posts.filter(i => i.problem === 'Fire').length;
        var totalFlood = this.props.posts.filter(i => i.problem === 'Flood').length;
        var totalPower = this.props.posts.filter(i => i.problem === 'Power').length;
        var totalMedical = this.props.posts.filter(i => i.problem === 'Medical').length;

        var criticalList = {
            fire: this.props.posts.filter(i => (i.problem === 'Fire') && i.priority === 'Critical').length,
            flood: this.props.posts.filter(i => (i.problem === 'Flood') && i.priority === 'Critical').length,
            power: this.props.posts.filter(i => (i.problem === 'Power') && i.priority === 'Critical').length,
            medical: this.props.posts.filter(i => (i.problem === 'Medical') && i.priority === 'Critical').length
        }

        var highList = {
            fire: this.props.posts.filter(i => (i.problem === 'Fire') && i.priority === 'High').length,
            flood: this.props.posts.filter(i => (i.problem === 'Flood') && i.priority === 'High').length,
            power: this.props.posts.filter(i => (i.problem === 'Power') && i.priority === 'High').length,
            medical: this.props.posts.filter(i => (i.problem === 'Medical') && i.priority === 'High').length
        }

        var mediumList = {
            fire: this.props.posts.filter(i => (i.problem === 'Fire') && i.priority === 'Medium').length,
            flood: this.props.posts.filter(i => (i.problem === 'Flood') && i.priority === 'Medium').length,
            power: this.props.posts.filter(i => (i.problem === 'Power') && i.priority === 'Medium').length,
            medical: this.props.posts.filter(i => (i.problem === 'Medical') && i.priority === 'Medium').length
        }

        var lowList = {
            fire: this.props.posts.filter(i => (i.problem === 'Fire') && i.priority === 'Low').length,
            flood: this.props.posts.filter(i => (i.problem === 'Flood') && i.priority === 'Low').length,
            power: this.props.posts.filter(i => (i.problem === 'Power') && i.priority === 'Low').length,
            medical: this.props.posts.filter(i => (i.problem === 'Medical') && i.priority === 'Low').length
        }

        return ( 
            <React.Fragment>
            <div className="container-fluid">
                <div className="row content">
                    <div height='100%' className="col-sm-2 card text-light bg-dark my-3 sidenav">
                        <h3 className="text-left m-2">Analytics</h3>
                        {new Date().toLocaleString()}
                        <hr/>
                        <h5>What We Analyse</h5>
                        <div className='card bg-light'>
                            <h7>
                            <span className='badge badge-pill badge-dark text-light m-1'>Power ⚡</span>
                                <span className='badge badge-pill badge-danger text-light m-1'>Critical</span>
                                <span className='badge badge-pill badge-warning text-light m-1'>High</span>
                                <span className='badge badge-pill badge-dark text-light m-1'>Flood 🌊</span>
                                <span className='badge badge-pill badge-primary text-light m-1'>Medium</span>
                                <span className='badge badge-pill badge-dark text-light m-1'>Medical ⚕️</span>
                                <span className='badge badge-pill badge-success text-light m-1'>Low</span>
                                <span className='badge badge-pill badge-dark text-light m-1'>Fire 🔥</span>
                            </h7>                          
                        </div>
                        <hr/>
                        Total Number of Posts:<br/><h3>{this.props.posts.length}</h3>
                    </div>

                    <div className="col text-left card bg-light mx-2 my-3">
                        <h4 className="text-left m-3"><small>RETRIEVED FROM RECENT POSTS</small></h4>
                        <hr/>
                        <div className="container">
                        <h2>Analytics Table</h2>
                        <p>Total aggregated number of posts from each risk and problem we analyse.</p>            
                        <table className="table table-dark table-hover table-borderless">
                            <thead>
                                <tr className="text-center">
                                    <th className="bg-light"></th>
                                    <th>Fire 🔥</th>
                                    <th>Flood 🌊</th>
                                    <th>Power ⚡</th>
                                    <th>Medical ⚕️</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="bg-danger text-light font-weight-bold hover">Critical</td>
                                    <td className="text-center">{criticalList.fire}</td>
                                    <td className="text-center">{criticalList.flood}</td>
                                    <td className="text-center">{criticalList.power}</td>
                                    <td className="text-center">{criticalList.medical}</td>
                                    <td className="text-center">{totalCritical} [{this.percentage(totalCases, totalCritical)}%]</td>
                                </tr>
                                <tr>
                                    <td className="bg-warning text-light font-weight-bold">High</td>
                                    <td className="text-center">{highList.fire}</td>
                                    <td className="text-center">{highList.flood}</td>
                                    <td className="text-center">{highList.power}</td>
                                    <td className="text-center">{highList.medical}</td>
                                    <td className="text-center">{totalHigh} [{this.percentage(totalCases, totalHigh)}%]</td>
                                </tr>
                                <tr>
                                    <td className="bg-primary text-light font-weight-bold">Medium</td>
                                    <td className="text-center">{mediumList.fire}</td>
                                    <td className="text-center">{mediumList.flood}</td>
                                    <td className="text-center">{mediumList.power}</td>
                                    <td className="text-center">{mediumList.medical}</td>
                                    <td className="text-center">{totalMedium} [{this.percentage(totalCases, totalMedium)}%]</td>
                                </tr>
                                <tr>
                                    <td className="bg-success text-light font-weight-bold">Low</td>
                                    <td className="text-center">{lowList.fire}</td>
                                    <td className="text-center">{lowList.flood}</td>
                                    <td className="text-center">{lowList.power}</td>
                                    <td className="text-center">{lowList.medical}</td>
                                    <td className="text-center">{totalLow} [{this.percentage(totalCases, totalLow)}%]</td>
                                </tr>
                                <tr>
                                    <td className="bg-secondary text-light font-weight-bold">Total</td>
                                    <td className="text-center">{totalFire} [{this.percentage(totalCases, totalFire)}%]</td>
                                    <td className="text-center">{totalFlood} [{this.percentage(totalCases, totalFlood)}%]</td>
                                    <td className="text-center">{totalPower} [{this.percentage(totalCases, totalPower)}%]</td>
                                    <td className="text-center">{totalMedical} [{this.percentage(totalCases, totalMedical)}%]</td>
                                    <td className="text-center">{totalCases}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}
 
export default Analytics;