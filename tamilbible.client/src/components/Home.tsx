import { Box, Grid2 } from "@mui/material";
import TopBar from "./TopBar/TopBar.tsx";
import Header from "./Header/Header.tsx";
import Navigation from "./Navigation/Navigation.tsx";
import { useConfigStore } from "../store/useConfigStore.ts";
import HomeContent from "./MainContent/HomeContent/HomeContent.tsx";
import IndexContent from "./MainContent/IndexContent/IndexContent.tsx";
import ListsContent from "./MainContent/ListsContent/ListsContent.tsx";
import WordSearchContent from "./MainContent/WordSearchContent/WordSearchContent.tsx";
import BibleQuizContent from "./MainContent/BibleQuizContent/BibleQuizContent.tsx";
import FavoriteContent from "./MainContent/FavoriteContent/FavoriteContent.tsx";
import HelpContent from "./MainContent/HelpContent/HelpContent.tsx";

const Home = () => {
  const { selectedNav } = useConfigStore();

  const renderSelectedNav = (navId: number): any => {
    switch (navId) {
      case 1:
        return <HomeContent />;
      case 2:
        return <IndexContent />;
      case 3:
        return <ListsContent />;
      case 4:
        return <WordSearchContent />;
      case 5:
        return <BibleQuizContent />;
      case 6:
        return <FavoriteContent />;
      case 7:
        return <HelpContent />;
      default:
        return <HomeContent />;
    }
  };
  return (
    <Box>
      <Grid2 container bgcolor={"lightgreen"}>
        <Grid2 size={{ xs: 12, lg: 12 }}>
          <TopBar />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 12 }}>
          <Header />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 12 }}>
          {/* <NavBar /> */}
          <Navigation />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 12 }}>
          {/* <MainContent /> */}
          {renderSelectedNav(selectedNav)}
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Home;
