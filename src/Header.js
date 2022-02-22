import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Resume from "./components/Resume/resume";
import Contact from "./components/contact/contact";

 import Navbar from './Navbar'

 
export default function Header() {
  const styles = {
    header: {
      position: "sticky",
      color: "black",
    },
    name: {
        color: "black",
    },
    links: {
        color: "black",
        textDecoration: "none",
    }
  };
  const displayDesktop = () => {
    return (
      <Toolbar >
        {nameLogo}
        <div>
          <Navbar
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </Toolbar>
    );
  };
  const nameLogo = (
    <Typography variant="h4" component="h1">
     Santiago I.R.
    </Typography>
  );

  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About/>;
    }
    if (currentPage === "Portfolio") {
      return <Projects/>;
    }
    if (currentPage === "Resume") {
      return <Resume/>;
    }
    return <Contact/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <AppBar style={styles.header}>{displayDesktop()}</AppBar>
      </header>
      {renderPage()}
    </div>
  );
}