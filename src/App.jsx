import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, Feed, ChannelDetail, SearchFeed, VideoDetails} from "./components";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element ={<Feed></Feed>}></Route>
        <Route path="/video/:id" element ={<VideoDetails></VideoDetails>}></Route>
        <Route path="/channel/:id" element ={<ChannelDetail></ChannelDetail>}></Route>
        <Route path="/search/:searchTerm" element ={<SearchFeed></SearchFeed>}></Route>
      </Routes>
    </Box>
  );
};

export default App;
