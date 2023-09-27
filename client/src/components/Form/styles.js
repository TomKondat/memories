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
    background: "transparent", // Set the background to transparent
    color: "#336699", // Change the text color to an orange shade
    border: "2px solid #336699", // Add an orange border
    borderRadius: "15px",
    transition: "0.5s", // Add a smooth transition effect
    "&:hover": {
      background: "#336699", // Change the background color on hover
      color: "white", // Change the text color on hover
    },
  },
  buttonClear: {
    background: "transparent", // Set the background to transparent
    color: "#DC3125", // Change the text color to an orange shade
    border: "2px solid #DC3125", // Add an orange border
    borderRadius: "15px",
    transition: "0.5s", // Add a smooth transition effect
    "&:hover": {
      background: "#DC3125", // Change the background color on hover
      color: "white", // Change the text color on hover
    },
  },
  formTitle: {
    textAlign: "center",
    color: "#69ACC2",
    fontWeight: "bold",
    fontFamily: "serif",
    fontSize: "2rem",
  },
}));
