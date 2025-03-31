import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";

const App = () => {
  const navigate = useNavigate();

  const cards = [
    { id: 1, title: "🌾", description: "Agriculture,Rural & Environment." },
    { id: 2, title: "🏥", description: "Health & Wellness." },
    {
      id: 3,
      title: "🎓",
      description: "Education & Learning.",
    },
    { id: 4, title: "🏠", description: "Housing & Shelter." },
    { id: 5, title: "💼", description: "Business & Entrepreneurshi." },
    {
      id: 6,
      title: "👩‍👧‍👦",
      description: "Women and Child.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ padding: 1 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          {/* <img
            src="/assets/clg.logo.png"
            alt="schemes logo"
            style={{ width: "10px", borderRadius: "10px" }}
          /> */}
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2c5" }}>
            TNschemes
          </Typography>

          {/* Right Buttons */}
          <Box>
            <Button
              variant="contained"
              color="success"
              sx={{ marginRight: 1 }}
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/reg")}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 4,
          backgroundColor: "#f0f4f3",
          // minHeight: "80vh",
          overflow: "hidden", // Hides overflow content
          overflowY: "scroll", // Enables vertical scrolling
          maxHeight: "60vh",
        }}
      >
        {/* Left Side */}
        <Box sx={{ maxWidth: "40%" }}>
          <img
            src="/assets/project.img.webp"
            alt="Farmer using phone"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Box>

        {/* Right Side Content */}
        <Box sx={{ textAlign: "left", maxWidth: "50%" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            <span style={{ color: "green" }}>Discover</span> government schemes
            for you...
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            Find Personalised Schemes Based on Eligibility
          </Typography>

          {/* Cards Section */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
              gap: 2, // Space between cards
              marginTop: 2,
            }}
          >
            {cards.map((card, index) => (
              <Card
                key={card.id}
                sx={{
                  backgroundColor: navigate === index ? "#e0f2f1" : "#fff",
                }}
              >
                <CardActionArea onClick={() => navigate("/scheme_list")}>
                  <CardContent>
                    <Typography variant="h5">{card.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: "#f0f4f3", padding: 2, textAlign: "center" }}>
        <Typography
          variant="body2"
          sx={{ color: "#688", fontWeight: "medium", padding: "5px 15px" }}
        >
          #GOVERNMENTSCHEMES / #SCHEMESFORYOU
        </Typography>
      </Box>
    </div>
  );
};

export default App;
