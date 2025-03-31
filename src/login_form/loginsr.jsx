import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
} from "@mui/material";
import { NavLink } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const validateForm = () => {
    if (username === "" || password === "") {
      alert("Both username and password are required.");
      return;
    }
    if (username.toLowerCase() === "" && password === "") {
      alert("Successfully Logged in");
      clearFields();
    } else {
      alert("Invalid Username/Password");
    }
  };

  const clearFields = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6f8",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: 400,
          padding: 4,
          borderRadius: 2,
          textAlign: "center",
          boxShadow: 3,
          backgroundColor: "#fff",
        }}
      >
        <img
          src="/assets/ibi-logo.png"
          alt="scheme Logo"
          width={100}
          style={{ marginBottom: 16 }}
        />

        <Typography variant="h5" fontWeight="bold" color="primary" mb={2}>
          Login
        </Typography>

        {/* Username Field */}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Remember Me Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              color="primary"
            />
          }
          label="Remember Me"
          sx={{ display: "block", textAlign: "left", mt: 1 }}
        />

        {/* Login & Cancel Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button variant="contained" color="primary" onClick={validateForm}>
            Login
          </Button>
          <Button variant="outlined" color="error" onClick={clearFields}>
            Cancel
          </Button>
        </Box>

        {/* Forgot Password & Register Links */}
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Link component={NavLink} to="/" color="primary">
            Forgot password?
          </Link>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Not registered?{" "}
            <Link component={NavLink} to="/reg" color="primary">
              Register here
            </Link>
          </Typography>

          <Typography variant="body" sx={{ mt: 1 }}>
            Back to{" "}
            <Link component={NavLink} to="/" color="primary">
              Homescreen
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default LoginForm;
