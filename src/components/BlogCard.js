import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const { tags } = useSelector((state) => state.filter);

  const active = "bg-cyan-500";

  return (
    <div className="shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900">
      {pathname.includes("cart") && (
        <div>
          <p>{blog.quantity}</p>
        </div>
      )}
      <div className="h-52 w-52 mx-auto overflow-hidden mb-7">
        <img
          className="h-full w-full object-cover"
          src={blog.image}
          alt={blog.name}
        />
      </div>
      <h1 className="font-bold">{blog.name}</h1>
      <div></div>
    </div>
  );
};

export default BlogCard;
