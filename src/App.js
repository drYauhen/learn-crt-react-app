import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: "this is the new state"
        }
    }
    update(e) {
        console.log(e.target);
        console.log(this);
        this.setState({txt: e.target.value});
    }
    render(){
        let th = this;
        return (
            <div>
            <input type="text" onChange={th.update.bind(th)} />
                <h1>Hello World</h1>
                <b>{this.props.txt}</b>
                <h2>{this.state.txt}</h2>
             </div>
        )
    }
}

App.propTypes = {
    txt: React.PropTypes.string.isRequired,
    cat: React.PropTypes.number.isRequired
}

export default App;