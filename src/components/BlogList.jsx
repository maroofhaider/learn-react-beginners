import React from 'react'

function BlogList({blogs, handleClick, handleDelPost}) {
  return (
    <div className="blog-main mq-container mh--flex">
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <img src={blog.imgPath} alt="" />
                <div className="blog-info">
                    <h3 className="blog-title">{blog.title}</h3>						
                    <p>written by <span className="blog-author">{blog.author}</span> | <span className="blog-date">Nov 21, 2023</span></p>
                </div>
                <div className="mh--flex">
                  <button onClick={() => {handleClick(handleClick)}} className='mh--button'>Read More</button>
                  <button onClick={() => {handleDelPost(blog.id)}} className='mh--button dark-btn'>Delete Post</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default BlogList