import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { toast } from "react-toastify";
import { BackButton } from "../BackButton/BackButton";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeedback,
  setLoading,
  setError,
} from "../../redux/features/feedbackSlice";
import { feedbackApi } from "../../api/feedback-api";
import { RootState } from "../types/type";

const FeedbackForm = (props) => {
  const [title, setTitle] = useState("");
  const feedbackList = useSelector(
    (state: RootState) => state.feedback.feedbackList
  ); 
  const maxLength = 200;
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      toast.error("The review cannot be empty!");
      return;
    }

    dispatch(setLoading(true));
    try {
      const response = await feedbackApi.createFeedback(title);
      dispatch(addFeedback(title)); 
      toast.success(response.data.message);
      setTitle("");
    } catch (error) {
      dispatch(setError(error.message));
      toast.error("An error occurred when sending a review.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleChangeCount = (e) => {
    const inputValue = e.target.value;
    if (maxLength - inputValue.length >= 0) {
      setTitle(inputValue);
    }
  };

  return (
    <>
      <BackButton iconColor={props.toggleStyle.iconColor} />

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: props.toggleStyle.backgroundColor,
          maxWidth: "600px",
          margin: "0 auto",
          padding: "24px",
          borderRadius: "28px",
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            textAlign: "center",
            color: props.toggleStyle.textColor,
          }}
        >
       Leave your feedback
        </Typography>
        <TextField
          color="transparent"
          label="Your feedback"
          variant="outlined"
          fullWidth
          multiline
          rows={1}
          value={title}
          onChange={handleChangeCount}
          required
          inputProps={{ maxLength: maxLength }}
          helperText={`${maxLength - title.length} символов осталось`}
          sx={{
            background: "rgb(233, 233, 233)",
            borderRadius: "14px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "14px",
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={title.length === 0}
          sx={{
            marginTop: "16px",
            borderRadius: "30px",
            backgroundColor: props.toggleStyle.backgroundColor,
            color: "#fff"
          }}
        >
           Send
        </Button>
      </Box>

      <Box sx={{ marginTop: "24px", maxWidth: "600px", margin: "0 auto" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            textAlign: "center",
            color: props.toggleStyle.textColor,
            marginTop: "30px",
          }}
        >
        List of reviews
        </Typography>
        <List
          sx={{
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 1,
          }}
        >
          {feedbackList.map((feedback) => (
            <ListItem
              key={feedback.id}
              sx={{
                borderBottom: "1px solid #e0e0e0",
                padding: "16px",
                "&:last-child": { borderBottom: "none" },
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
            >
              <ListItemText
                primary={feedback.title}
                primaryTypographyProps={{
                  style: {
                    fontWeight: "bold",
                    color: "#333",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default FeedbackForm;
