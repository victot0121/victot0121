import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() { 
    return (
        <div className="storyReel">
            <Story className="storyReel__story"
                image="/image/jonas.jpg" 
                profileSrc={require('./image/house.jpg').default}
                title="oyiga" />
            <Story className="storyReel__story"
                image="https://unsplash.com/photos/bh4LQHcOcxE"
                profileSrc={require('./image/jonas.jpg').default}
                title="victor" />
            <Story className="storyReel__story"
                image="https://unsplash.com/photos/bh4LQHcOcxE"
                profileSrc={require('./image/karim-manjra-6IBmijDbmts-unsplash.jpg').default} s
                title="micheal" />
            <Story className="storyReel__story"
                image="https://pin.it/GBjVE0Y" 
                profileSrc={require('./image/inshot.jpg').default}
                title="chika" />
            <Story className="storyReel__story"
                image='https://unsplash.com/photos/bh4LQHcOcxE'
                profileSrc={require('./image/What song.jfif').default}
                title="ifeoma" />

            <Story className="storyReel__story"
                image="https://unsplash.com/photos/bh4LQHcOcxE"
                profileSrc={require('./image/joshua-rawson-harris-TYdYrjdpSZ8-unsplash.jpg').default}
                title="jude" />
        </div>
    )
}

export default StoryReel;
