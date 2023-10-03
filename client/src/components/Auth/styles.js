import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    borderRadius: "15px",
    backgroundColor: "#f5f5f5",
    boxShadow: "white 0px 0px 10px 0px",
    border: "3px solid lightgrey",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "transparent",
    color: "#336699",
    border: "2px solid #336699",
    borderRadius: "5px",
    transition: "0.5s",
    "&:hover": {
      background: "#336699",
      color: "white",
    },
  },
  googleButton: {
    borderRadius: "5px",
    marginBottom: theme.spacing(2),
    backgroundColor: "#4285F4",
    color: "#FFFFFF",
    marginBottom: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#357AE8",
    },
  },
}));
