// Home.js
import React from 'react';
import SharePage from './ShareSheet.js';

function Home() {

return (
    <div className="App">
    
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
        <a onClick={() => SharePage()}>Share Now!</a>

    </div>
    );
}
export default Home;