import React from 'react';
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export const BackButton = (props) => {
    return (
        <Link to="..">
            <IconButton sx={{ color: props.iconColor, marginBottom: "20px" }}>
                <BiArrowBack />
            </IconButton>
        </Link>
    );
};

 