import React, { useContext } from "react";

import { Twitter, Facebook, Instagram } from "@mui/icons-material";
import { ContextValue } from "../../App";
import { Container } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  const { theme } = useContext(ContextValue);
  return (
    <Container className={theme === false ? "footer-dark" : "footer-light"}>
      <footer className="portfolio-footer">
        <div className="footer">
          <p>
            <a href="https://twitter.com/Safwan_Ml">
              <Twitter />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100094648761645">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/safwan_muhammed_k/">
              <Instagram />
            </a>
            <br></br>
            &copy; 2023 All rights are reserved{" "}
          </p>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
