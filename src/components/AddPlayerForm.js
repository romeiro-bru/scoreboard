import React from 'react';

class AddPlayerForm extends React.Component {

    state ={
        value: ''
    };

    handleValueChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render() {
        return(
            <form>
                <input type="text" onChange={this.handleValueChange} value={this.state.value} placeholder="Enter a players name"/>
                <input type="subtmit" value="Add a player"/>
            </form>
        );
    }
}

export default AddPlayerForm;