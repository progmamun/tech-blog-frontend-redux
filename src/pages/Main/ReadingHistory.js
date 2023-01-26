import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";

const ReadingHistory = () => {
  const blog = useSelector((state) => state.blog.history);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {blog
        .sort((a, b) => a._id - b._id)
        .map((blog) => (
          <BlogCard key={blog.model} blog={blog} />
        ))}
    </div>
  );
};

export default ReadingHistory;
