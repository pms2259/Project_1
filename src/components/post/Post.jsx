import "./post.css"

export default function Post() {
  return (
      <div className="post">
          <img
            className="postImg"
            src="https://images.pexels.com/photos/947384/pexels-photo-947384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="postInfo">
              <div className="postCats">
                  <span className="postCat">Music</span>
                  <span className="postCat">Life</span>
              </div>
              <span className="postTitle">lorem ipsum dolor sit amet</span>
              <hr />
              <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      </div>
  )
}
