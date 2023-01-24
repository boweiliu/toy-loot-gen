import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <div className="title">
        <div className="title-text">

        Toy loot gen game
        </div>
      </div>
      <div className="body">
        <div className="body-left-small">
          <div className="card-in-library-list">
            <div className="card-in-library-big">
              sample module here - expanded
            </div>
            <div className="card-in-library-big">
              sample module here - expanded
            </div>
            <div className="card-in-library-big">
              sample module here - expanded
            </div>
            <div className="card-in-library-big">
              sample module here - expanded
            </div>
          </div>
        </div>
        <div className="body-right-big">
            <div className="hull-wrapper">
              <div className="hull-title">your robot name here</div>
              <div className="hull-body">
                <div className="hull-column">
                  <div className="hull-column-strut"></div>
                  <div className="hull-column-container">
                    <div className="hull-column-item">
                      one
                    </div>
                    <div className="hull-column-item">
                      one
                    </div>
                    <div className="hull-column-item">
                      one
                    </div>
                    <div className="hull-column-item">
                      one
                    </div>
                  </div>
                </div>
                <div className="hull-column">
                </div>
                <div className="hull-column">
                </div>
                <div className="hull-column">
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="debug">
        debug
      </div>
    </div>
    </>
  );
}

export default App;
