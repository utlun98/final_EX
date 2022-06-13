import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#000",
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "pink",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "pink",
    },
    "&.Mui-focused fieldset": {
      borderColor: "pink",
    },
  },
});
export const BorderNoneTextField = styled(TextField)({
  backgroundColor: "#f3e4ea",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none"
  },
  "&.Mui-focused": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none"
    }
  }
});
export const CssTextFieldWhite = styled(TextField)({
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-input": {
    color: "#fff"
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#pink"
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "pink"
  },
  "&:hover .MuiOutlinedInput-input": {
    color: "#fff"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "pink",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "pink",
    },
    "&.Mui-focused fieldset": {
      borderColor: "pink",
    },
    "& .MuiInputLabel": {
      color: "#fff"
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#fff"
    },
  },
});
export const CssLink = {
  color: "#FC6C85", textDecoration: "none" 
} 
export const CssButton = {
  mt: 3,
  mb: 2,
  color: "#FC6C85",
  border: "1px solid pink",
  ":hover": {
    bgcolor: "pink", // theme.palette.primary.main
    color: "#000",
    border: "1px solid pink",
  },
}