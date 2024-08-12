import React from 'react'
const NewsItem=(props)=> {
    let { title, description, imageUrl, newsUrl, published } =props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl ? imageUrl : "https://cdn.mos.cms.futurecdn.net/Vn9jg4YrazTQ2RWpkB6zqG-1200-80.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">{new Date(published).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
      </div>
    )
  }
export default NewsItem