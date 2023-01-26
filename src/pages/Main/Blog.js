import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BsPlayCircleFill } from "react-icons/bs";
import moment from "moment";
import "../../css/blog.css";

const Blog = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const { id } = useParams();

  if (!blogs.length) {
    return <p className="text-2xl font-bold text-center mt-12">Loading...</p>;
  }

  const blog = blogs.find((blog) => blog._id === id);

  return (
    <div className="blog-details">
      <div className="blog-image-container mb-3">
        <img className="blog-image w-4/5" src={blog.image} alt="" />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">{blog.name}</h2>
        <div className="mb-3 flex justify-between">
          <p className="flex items-center">
            <BsPlayCircleFill />{" "}
            <span className="font-semibold mx-2">Time: </span>
            {blog.time} min
          </p>
          <p className="text-blue-500 font-semibold">
            {moment(blog.postedAt._id).format("MMM Do, YYYY")}
            {/* {moment(blog.postedAt).toISOString()} */}
          </p>
        </div>
        <p className="text-lg font-thin">{blog.details}</p>
        <div className="mt-5 flex gap-3">
          {blog.tags.map((tag, i) => {
            return (
              tag && (
                <span
                  key={i}
                  className="border hover:bg-blue-500 cursor-pointer hover:text-black text-cyan-500 border-blue-600 text-sm px-3 py-[2px] rounded-full"
                >
                  {tag}
                </span>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
