import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: "15px",
    backgroundColor: "#f5f5f5",
    boxShadow: "white 0px 0px 10px 0px",
    border: "3px solid lightgrey",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    background: "transparent",
    color: "#336699",
    border: "2px solid #336699",
    borderRadius: "15px",
    transition: "0.5s",
    "&:hover": {
      background: "#336699",
      color: "white",
    },
  },
  buttonClear: {
    background: "transparent",
    color: "#DC3125",
    border: "2px solid #DC3125",
    borderRadius: "15px",
    transition: "0.5s",
    "&:hover": {
      background: "#DC3125",
      color: "white",
    },
  },
  formTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "serif",
    fontSize: "2rem",
    letterSpacing: "1px",
    WebkitTextFillColor: "transparent",
    background: "linear-gradient(to right, #4ABFAB, #369DC3)",
    WebkitBackgroundClip: "text",
  },
}));
