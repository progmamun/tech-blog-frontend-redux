import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";
import { filterByUpload } from "../../redux/actions/filterAction";

const Home = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  let { tags, updateTime } = useSelector((state) => state.filter);
  console.log(tags);

  let content = blogs
    .filter((blog) => {
      if (tags.length) {
        return blog.tags.includes(tags);
      }
      return blog;
    })
    .map((blog) => <BlogCard key={blog._id} blog={blog} />);

  if (!blogs.length) {
    return (
      <h2 className="text-2xl font-bold text-center mt-16">
        Sorry! No Data found. Error 404
      </h2>
    );
  }
  const activeClass = "text-white  bg-indigo-500 border-white";

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          onClick={() => dispatch(filterByUpload("first"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            updateTime === "first" && activeClass
          }`}
        >
          First Upload
        </button>
        <button
          onClick={() => dispatch(filterByUpload("last"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            updateTime === "last" && activeClass
          } `}
        >
          Last Upload
        </button>
        <button
          onClick={() => dispatch(filterByUpload(""))}
          className={`border border-indigo-500 text-indigo-500 hover:bg-indigo-400 hover:text-white px-3 py-2 rounded-full font-semibold`}
        >
          Clear Filter
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
};

export default Home;
