import { useParams } from 'react-router-dom';
import useNotes from '../../hooks/useNotes';
import NoteContainer from '../NoteContainer/NoteContainer';

const EditNote = (props) => {
    const { id } = useParams();
    const { notes } = useNotes();
    const note = notes.find(note => note.id === id);
    return note ? <NoteContainer  toggleStyle={props.toggleStyle} isEditMode={true} initialNote={note} /> : <p>Note not found</p>;
};

export default EditNote;

