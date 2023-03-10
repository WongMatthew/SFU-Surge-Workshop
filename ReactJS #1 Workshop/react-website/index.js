import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="container">
      <div className="yellow otter">
        <img className="profile" src="images/yellow otter.png" alt="otter" />
        <div className="intro">
          <h2 className="name">otter</h2>
          <p>
            Otter has an unsophisticated face and is rarely flustered by anything. There have been incidents involving Otter sauntering into villages and gnawing on the houses without a single care.
          </p>
        </div>
      </div>

      <div className="blue otter">
        <img className="profile" src="images/blue otter.png" alt="otter" />
        <div className="intro">
          <h2 className="name">otter</h2>
          <p>
            Otter has an unsophisticated face and is rarely flustered by anything. There have been incidents involving Otter sauntering into villages and gnawing on the houses without a single care.
          </p>
        </div>
      </div>

      <div className="jokes">
        <h1>Want to hear a joke?</h1>
        <div className="joke-panel">
          <h2 className="joke-text">Which would you rather be, a penguin or a little otter?</h2>
          <button id="joke-btn" className="joke-btn" onClick={() => alert("A little (h)otter!")}>Answer</button>
        </div>
      </div>
    </div>
  );
}

export default App;