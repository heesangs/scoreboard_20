import React from 'react';
import Player from './Players'

function CustomPlayer(props) {
    return (
        <Player {...props}>
            {/* 모든 프롭스를 넘겨줄때 ...props를 사용한다. */}

        </Player>
    )
}

export default CustomPlayer;