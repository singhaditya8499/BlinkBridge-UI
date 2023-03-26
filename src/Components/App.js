import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';
import ReactPlayer from 'react-player';
import Header from './Header';

const firebaseConfig = {
  apiKey: "AIzaSyBwjbQGCrWUS25bfYaIXTcH4EvZvBTkazU",
  authDomain: "eye-remote.firebaseapp.com",
  databaseURL: "https://eye-remote-default-rtdb.firebaseio.com",
  projectId: "eye-remote",
  storageBucket: "eye-remote.appspot.com",
  messagingSenderId: "996648184059",
  appId: "1:996648184059:web:d979d5536895984412285e",
  measurementId: "G-BJ533T0JQ0"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const databaseRef = ref(db, 'code');

function App() {
  const [data, setData] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [text, setText] = useState("Play");

  useEffect(() => {
    onValue(databaseRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      setData(data);
    });
  }, [data]);

  useEffect(() => {
    if(data===1) {
      setPlaying(true);
      setText("PLAY");
    } else {
      setPlaying(false);
      setText("PAUSE");
    }
  }, [data])

  return (<>
  <Header/>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{fontSize: '5rem', marginTop: '70px'}}>{data !== null ? text : 'Loading data...'}</h1>
        <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=18s" playing={playing} style={{width: '100%', height: '100%'}}/>
      </div>
    </div>
    </>
  );
}

export default App;