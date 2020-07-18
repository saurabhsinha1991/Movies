import React from 'react';
import firebase from '../../base';

function Home() {
    return (
        <div>
            <button
                onClick={() => firebase.auth().signOut()}
            >Sign Out</button>
        </div>
    )
}

export default Home;
