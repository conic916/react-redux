import React from 'react';
import CommentsListContainer from './CommentsListContainer';
import DevTools from './DevTools';
import './App.css';

// komponent App => prezentacyjny , bez stanu i bez reduxa 
// tu jest arrow function, który wyrenderuje przekazany do niego komponent
const App = () => {
  return (
    <div className="App">
      <CommentsListContainer />

      <DevTools />
    </div>
  );
};

export default App;