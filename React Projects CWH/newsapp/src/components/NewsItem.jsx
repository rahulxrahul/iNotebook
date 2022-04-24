import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageSrc, newsUrl, author, publishedAt, source } =
      this.props; //array destructuring to extract title and description from props
    return (
      <div className="container">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex: '1', left: '80%'}}>
            {source}
            {/* <span className="visually-hidden">unread messages</span> */}
          </span>
          {/* <span className="badge rounded-pill bg-danger">Danger</span> */}
          <img
            src={
              !imageSrc
                ? "https://images.indianexpress.com/2022/04/SRH-vs-RCB-live.jpg"
                : imageSrc
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">{description}</p>
            <p className="card-text">Author : {!author ? "Unknown" : author}</p>
            <p className="card-text">
              Date : {new Date(publishedAt).toGMTString()}
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-primary"
            >
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
