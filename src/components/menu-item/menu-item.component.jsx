import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ section, history, match }) => (
  <div
    className={`${section.size} menu-item`}
    style={{ backgroundImage: `url(${section.imageURL})` }}
    onClick={() => history.push(`${match.url}${section.linkUrl}`)}
  >
    <div className="background-image">
      <div className="content">
        <h1 className="title">{section.title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  </div>
);

export default withRouter(MenuItem);
