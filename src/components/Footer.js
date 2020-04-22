import React from "react";

function Footer() {
  return (
    <div className="mt-3">
      <span>
        <span aria-label="Copyright" role="img">
          ©️
        </span>{" "}
        All rights reserved | 2020 | Made with{" "}
        <span aria-label="love" role="img">
          💚
        </span>{" "}
        by{" "}
        <a
          href="mailto:radiolivevideo@mail.fr"
          rel="noopener noreferrer"
          target="_blank"
        >
          Radio Live Video
        </a>
      </span>
    </div>
  );
}

export default Footer;
