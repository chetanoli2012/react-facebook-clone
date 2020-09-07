import React from 'react'
import './StoryReel.css'
import Story from './Story'


function StoryReel() {
    return (
        <div className='storyReel'>
            <Story profileSrc={`${process.env.PUBLIC_URL}/userAvatar1.jpeg`}
                title={`Dummy 1`}
                image={`${process.env.PUBLIC_URL}/storyReelBackground1.jpeg`}
            />
            <Story profileSrc={`${process.env.PUBLIC_URL}/userAvatar2.png`}
                title={`Dummy 2`}
                image={`${process.env.PUBLIC_URL}/storyReelBackground2.png`}
            />
            <Story profileSrc={`${process.env.PUBLIC_URL}/userAvatar3.png`}
                title={`Dummy 3`}
                image={`${process.env.PUBLIC_URL}/storyReelBackground3.jpeg`}
            />
            <Story profileSrc={`${process.env.PUBLIC_URL}/userAvatar4.png`}
                title={`Dummy 4`}
                image={`${process.env.PUBLIC_URL}/storyReelBackground4.jpeg`}
            />
        </div>
    )
}

export default StoryReel
