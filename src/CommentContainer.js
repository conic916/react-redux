// komponent - kontener !!! podpiety pod reduxa 

// connect - funkcja ktora laczy komponenty do store
// nie modyfikuje komponentow, zwraca tylko nowy z nowymi funkcjonalnosciami
import { connect } from 'react-redux';
import Comment from './Comment';
import { thumbUpComment, thumbDownComment, removeComment, editComment } from './actions.js';
// zwraca argument mapStateToProps => zajmuje sie mapowaniem odpowiedniej porcji stanu 
// do propsów, które przekażemy komponentowi...mapStateToProps musi być funkcją
//która na wejściu przyjmuje stan aplikacji, a na wyjściu 
//zwraca obiekt podpinający konkretne wartości propsów do komponentu CommentsList
const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  removeComment: (id) => dispatch(removeComment(id)),
  editComment: (id, text) => dispatch(editComment(id, text))
});

export default connect(null, mapDispatchToProps)(Comment);