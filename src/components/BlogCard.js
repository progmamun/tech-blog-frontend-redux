import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addToHistory } from "../redux/actions/blogAction";
import { BiListPlus } from "react-icons/bi";
import moment from "moment";
import { filterByTag } from "../redux/actions/filterAction";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const { tags } = useSelector((state) => state.filter);

  const seeDetails = (id) => {
    dispatch(addToHistory(blog));
    navigation(`blog/${id}`);
  };

  const active = "bg-cyan-500";

  return (
    <div className="shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900">
      {pathname.includes("cart") && (
        <div className="rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold ">
          <p> {blog.quantity} </p>
        </div>
      )}
      <div className="h-52 w-52 mx-auto overflow-hidden mb-7">
        <img
          className="h-full w-full object-cover"
          src={blog.image}
          alt={blog.name}
        />
      </div>
      <h1 className="font-bold ">{blog.name}</h1>
      <div className="my-3 flex justify-between">
        <p>
          <span className="font-semibold">Time:</span> {blog.time}min
        </p>
        <p className="text-blue-500">
          {moment(blog.postedAt._id).format("MMM Do, YYYY")}
          {/* {moment(blog.postedAt).toISOString()} */}
        </p>
      </div>
      <div className=" flex-1">
        <ul className="space-y-2">
          <li className="text-sm ">{blog.details.substr(0, 150)}......</li>
        </ul>
      </div>
      <div className="flex flex-wrap mt-3 gap-2">
        {blog.tags.map(
          (tag, i) =>
            tag && (
              <span
                onClick={() => dispatch(filterByTag(tag))}
                key={i}
                className={`border hover:bg-blue-500 cursor-pointer text-black ${
                  tags.includes(tag) ? active : null
                } border-blue-500 text-xs px-2 py-[2px] rounded-full`}
              >
                {tag}
              </span>
            )
        )}
      </div>
      {!pathname.includes("reading-history") ? (
        <div className="flex gap-2 mt-5">
          <button
            onClick={() => seeDetails(blog._id)}
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Read More
          </button>

          <button
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => seeDetails(blog._id)}
          className="bg-indigo-500 mt-5 rounded-full py-1 px-2 flex-1 text-white text-bold"
        >
          Already Read Content
        </button>
      )}
    </div>
  );
};

export default BlogCard;
