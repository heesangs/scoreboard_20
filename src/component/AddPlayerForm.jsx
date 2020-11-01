import React from "react";

class AddPlayerForm extends React.Component {
    state = {
        value: ""
    }

    handleChangeValue = (e) => {
        this.setState({ value: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        //왜 새로고침이 일어날까? 실행시 form에 onSubmit이기때문에 페이지 전환이 일어난다.
        //e.preventDefault(); 로 막아준다.
        //e.stopPropagation(); 는 페이지를 막아준다.
        console.log('handleSubmit')
        this.props.addPlayer();
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
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