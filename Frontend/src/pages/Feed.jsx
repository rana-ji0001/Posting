import React, { useState,useEffect } from 'react'
import axios from 'axios'


const Feed = () => {
    const [posts,setPosts] = useState([
        {
            _id : "1",
            image : "https://ik.imagekit.io/mczk0hrvq7/image_9809FAwOt.jpg",
            caption : "test_caption"
        }
    ]);
    useEffect(() => {
        axios.get("http://localhost:3000/posts").then((res) => {
            setPosts(res.data.post)
        });
    },[]);
  return (
    <div>
      <section className='feed-section'>
       {
          posts.length > 0
            ? posts.map(post => (
                <div key={post._id} className='post-card'>
                  <img src={post.image} alt={post.caption} />
                  <p>{post.caption}</p>
                </div>
              ))
            : <p>No posts available</p>
        }

      </section>
    </div>
  )
}

export default Feed
