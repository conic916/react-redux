import React from 'react';
import CommentContainer from './CommentContainer';
import DevTools from './DevTools';
import './App.css';

// komponent App => prezentacyjny , bez stanu i bez reduxa 
// tu jest arrow function, który wyrenderuje przekazany do niego komponent
const App = () => {
  return (
    <div className="App">
      Tu będzie lista komentarzy!
    </div>
  );
};

export default App;
