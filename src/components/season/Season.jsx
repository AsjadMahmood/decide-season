import React from 'react';
import './Season.css'

function DecideSeason(lat, month) {
    if (lat > 0)
        return month > 2 && month < 8 ? 'summer' : 'winter';
    else
        return month > 2 && month < 8 ? 'winter' : 'summer';
}

let seasonConfig = {
    summer: {
        text: "Let's Hit The Beach",
        iconName: 'sun'
    },
    winter: {
        text: "Look It's Snowfall Outside",
        iconName: 'snowflake'
    }
}

const Season = (props) => {
    console.log('props', props);
    let season = DecideSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`iconLeft massive ${iconName} icon`}></i>
            <h1> {text}</h1>
            <i className={`iconRight massive ${iconName} icon`}></i>
        </div>
    )
}

export default Season;