import React from 'react';

import './App.css';

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="App" >
      <container className="container">
        <div className='button-box'>
          <button onClick={() => setOpen(true)} className='button'>
            Press to open
          </button>
        </div>

        <div className={`window-box ${open ? 'visible' : 'unVisible'}`}>
            <img 
              className='window-close'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png'
              alt='close'
              onClick={() => setOpen(false)}
            />
            <img 
              className='window-img' 
              src='https://t4.ftcdn.net/jpg/02/09/65/05/360_F_209650573_aqlaXMxoBDMaXck0WQmnBryltJIwpK6F.jpg' 
              alt='wow' 
            />
          </div>
      </container>
    </div>
  );
};

export default App;
