import React from 'react';

class AddPlayerForm extends React.Component {

    playerInput = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.AddPlayer(this.playerInput.current.value);
        event.currentTarget.reset();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={this.playerInput} placeholder="Enter a players name"/>
                <input type="submit" value="Add a player"/>
            </form>
        );
    }
}

export default AddPlayerForm;