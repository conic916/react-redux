// Komponent wyswietlajacy pojedynczy komentarz: // bez stanu, i logiki
// zwraca li, z danymi komentarza 

import React from 'react';

const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment }) => {
    return (
        <li>{text}
            <span> votes: {votes}</span>
            <div className="Buttons">
                <button onClick={() => thumbUpComment(id)}>Thumb up</button>
                <button onClick={() => thumbDownComment(id)}>Thumb down</button>
                <button onClick={() => removeComment(id)}>Remove</button>
                <button onClick={() => editComment(id, prompt('Edit this comment:'))}>Edit</button>
            </div>
        </li>)
}

export default Comment;