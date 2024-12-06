import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import EditableSpan from "../EditableSpan/EditableSpan";
import style from './TaskList.module.css';

const TaskList = (props) => {
  return (
    <Box sx={{ marginTop: 2 }}>
      {props.tasks.length===0?(
                <Typography color={props.color} variant="body1" align="center" sx={{ margin: 2 }}>
                Нет задач
              </Typography>
      ):(
      props.tasks.map((task) => (
          <Box
            className={`${task.isDone ? style.isDone : style.task}`}
            key={task.id}
            sx={{ display: "flex", alignItems: "center", gap: 1, borderRadius:'20px'}}
          >
            <Checkbox
              checked={task.isDone}
              onChange={() => props.toggleCompletion(task.id)}
              sx={{
                "&.Mui-checked": {
                  color: "var(--orange-color)",
                },
              }}
            />
            <EditableSpan
              sx={{ color: "red" }}
              title={task.title}
              onChange={(newTitle) => props.changeTaskTitle(task.id, newTitle)}
            />
            <IconButton onClick={() => props.handleOpen(task.id)} color="error">
              <Delete />
            </IconButton>
          </Box>
            ))
        )}
    </Box>
  )
};

export default TaskList;
