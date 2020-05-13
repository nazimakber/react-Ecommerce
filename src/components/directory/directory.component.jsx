import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          id: 1,
          title: "HATS",
          imageURL: "https://i.ibb.co/cvpntL1/hats.png",
          linkUrl: "hats",
        },
        {
          id: 2,
          title: "JACKETS",
          imageURL: "https://i.ibb.co/px2tCc3/jackets.png",
          linkUrl: "",
        },
        {
          id: 3,
          title: "SNEAKERS",
          imageURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
          linkUrl: "",
        },
        {
          id: 4,
          title: "WOMEN",
          imageURL: "https://i.ibb.co/GCCdy8t/women.png",
          size: "large",
          linkUrl: "",
        },
        {
          id: 5,
          title: "MEN",
          imageURL: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          linkUrl: "",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map((section) => (
          <MenuItem key={section.id} section={section}></MenuItem>
        ))}
        ;
      </div>
    );
  }
}

export default Directory;
