import React from 'react';

class AddPlayerForm extends React.Component {

    state ={
        value: ''
    };

    handleValueChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.AddPlayer(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleValueChange} value={this.state.value} placeholder="Enter a players name"/>
                <input type="submit" value="Add a player"/>
            </form>
        );
    }
}

export default AddPlayerForm;