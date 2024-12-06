import { TextField } from "@mui/material";
import {useState } from "react";
import PropTypes from 'prop-types';

const EditableSpan = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle]=useState("")

    const activateEditMode=()=>{
        setEditMode(true)
        setTitle(props.title)
      }
      const activateViewMode=()=>{
        setEditMode(false)
        props.onChange(title)
      }
      const onChangeText = (e) => {
        setTitle(e.target.value);
    };

    return editMode ? <TextField value={title} onChange={onChangeText} onBlur={activateViewMode} autoFocus/> : <span   onDoubleClick={activateEditMode}>{props.title}</span>
}
EditableSpan.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EditableSpan
