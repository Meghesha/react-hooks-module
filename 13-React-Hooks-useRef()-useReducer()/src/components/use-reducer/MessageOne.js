import React from 'react';

class MessageOne extends React.Component{
    constructor(props){
        super(props);
        this.state={
            message : 'Hello'
        }
    }
    render(){
        return(
            <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <p className="h4">Class Component - this.setState()</p>
                                </div>
                                <div className="card-body">
                                    <p className="h2">{this.state.message}</p>
                                    <button onClick={e => this.setState({message : 'Good Morning'})} className="btn btn-success btn-sm">Good Morning</button>
                                    <button onClick={e => this.setState({message : 'Good Afternoon'})} className="btn btn-warning btn-sm">Good Afternoon</button>
                                    <button onClick={e => this.setState({message : 'Good Evening'})} className="btn btn-danger btn-sm">Good Evening</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        )
    }
}
export default MessageOne;