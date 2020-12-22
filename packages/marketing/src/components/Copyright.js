import React from "react";
import Typography from "@material-ui/core/Typography";
import MaterialLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MaterialLink component={Link} to="/" color="inherit">
        Your Website
      </MaterialLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
