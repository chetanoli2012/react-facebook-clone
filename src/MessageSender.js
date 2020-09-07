import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db  from './firebase';
import firebase from 'firebase';

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    // console.log('input', input);

    const handleSubmit = e => {
        //avoid the refresh
        e.preventDefault();

        // do some db operations
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username : user.displayName,
            image: imageUrl
        })
        //reset the imageURL and input fields
        setInput('');
        setImageUrl('');
    }

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className='messageSender__input'
                        placeholder={`What's on your mind?`} />
                    <input
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        placeholder={`Image URL(Optional)`}
                    />
                    <button onClick={handleSubmit} type='submit' >
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender
