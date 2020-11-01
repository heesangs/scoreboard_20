import React from 'react';

function Statistics(props) {
    const totalPlayer = props.players.length;
    let totalScore = 0;
    props.players.forEach(player => totalScore += player.score)
    //forEach : 배열객체에만 사용할 수 있는 반복문. 

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Player:</td>
                    <td>{totalPlayer}</td>
                </tr>
                <tr>
                    <td>Total:</td>
                    <td>{totalScore}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Statistics; 