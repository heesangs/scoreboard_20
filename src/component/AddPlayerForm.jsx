import React from "react";

class AddPlayerForm extends React.Component {
    state = {
        value: ""
    }

    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.textRef = React.createRef();
    }
    //vailidation: 확인이라는 뜻으로 유저가 inputfield에서 실수를 미연에 방지하도록 클라이언트단에서 막아주는것.
    //즉, 회원가입시 이름, 이메일, 전화번호 등을 입력할때의 경고표시 등이 이에 속한다. 

    handleChangeValue = (e) => {
        this.setState({ value: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //왜 새로고침이 일어날까? 실행시 form에 onSubmit이기때문에 페이지 전환이 일어난다.
        //e.preventDefault(); 로 막아준다.
        //e.stopPropagation(); 는 페이지를 막아준다.

        const form = this.formRef.current; //form node접근
        const player = this.textRef.current; //input node접근
        //document.getElementById(id)와 같은 기능

        console.log(form.checkValidity()); //폼 내의 모든 입력 validation을 체크
        console.log(player.validity.valid) //입력의 9가지 validation을 체크
        // 별도 공부필요. "react input field validation tutorial"

        if (!form.checkValidity()) {
            //valid 폼을 찾아 에러 문구 표시
            return;
        }

        this.props.addPlayer(this.state.value);
        this.setState({ value: "" })
    }

    render() {
        return (
            <form
                className="form"
                onSubmit={this.handleSubmit}
                ref={this.formRef}
                noValidate>
                {/* noValidate는 html의 validation을 막아준다. */}

                <input type="text" className="input" placeholder="enter a player's name"
                    value={this.state.value}
                    onChange={this.handleChangeValue}
                    ref={this.textRef}
                    required
                    // required는 html5 validation을 사용하도록 해준다. 
                />
                <input type="submit" className="input" value="Add Player"/>
            </form>
        )
    }
}

export default AddPlayerForm; 