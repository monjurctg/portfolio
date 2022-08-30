import React from "react";
let blogs = [
  "https://www.wpbeginner.com/wp-content/uploads/2019/01/choosethebestbloggingplatform.png",

  "https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg",
  "https://www.salesforce.com/content/dam/blogs/ca/Blog%20Posts/anatomy-of-a-blog-post-deconstructed-open-graph.jpg",
  "https://www.emergingedtech.com/wp/wp-content/uploads/2018/04/blogging.jpg",
];
const Blogs = () => {
  return (
    <div
      className=""
      id="blogs"
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <h1 className="heading mb-4">
        {" "}
        <span className="text-warning">My</span> Blogs
      </h1>
      <div className="row  mt-5 row-cols-sm-1 row-cols-lg-2 g-4">
        {blogs.map((blog) => (
          <div className="col">
            <img src={blog} height="250" width="500px" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
