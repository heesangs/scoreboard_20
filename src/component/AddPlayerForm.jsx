import React from "react";

class AddPlayerForm extends React.Component {
    state = {
        value: ""
    }

    handleChangeValue = (e) => {
        this.setState({ value: e.target.value })
    }

    render() {
        return (
            <form className="form">
                <input type="text" className="input" placeholder="enter a player's name"
                    value={this.state.value}
                    onChange={this.handleChangeValue}
                />
                <input type="submit" className="input" value="Add Player" />
            </form>
        )
    }
}

export default AddPlayerForm; 