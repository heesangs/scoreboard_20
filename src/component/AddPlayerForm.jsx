import React, { useState, useRef } from "react";

function AddPlayerForm(props) {

    const [value, setValue] = useState("");

    const formRef = useRef(null);
    const textRef = useRef();

    const handleChangeValue = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = formRef.current; //form node접근
        const player = textRef.current; //input node접근
        //useRef를 사용하는 이유는 DOM을 선택하는 용도로 사용한다. 
        //document.getElementById(id)와 같은 기능

        console.log(form.checkValidity()); //폼 내의 모든 입력 validation을 체크
        console.log(player.validity.valid) //입력의 9가지 validation을 체크
        // 별도 공부필요. "react input field validation tutorial"

        if (!form.checkValidity()) {
            //valid 폼을 찾아 에러 문구 표시
            return;
        }
        props.addPlayer(value);
        setValue("")
    }

    return (
        <form
            className="form"
            onSubmit={handleSubmit}
            ref={formRef}
            noValidate>
            {/* noValidate는 html의 validation을 막아준다. */}

            <input type="text" className="input" placeholder="enter a player's name"
                value={value}
                onChange={handleChangeValue}
                ref={textRef}
                required
            // required는 html5 validation을 사용하도록 해준다. 
            />
            <input type="submit" className="input" value="Add Player" />
        </form>
    )
}

export default AddPlayerForm; 