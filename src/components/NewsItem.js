import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                
                <div className="card" >
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
                            {source}
                           
                        </span>
                    
                    <img src={imageUrl ? imageUrl : "https://cdn.mos.cms.futurecdn.net/QVKLr4YaWTXkvBehjiT7mZ-1200-80.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-outline-danger">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
