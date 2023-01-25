import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateBlogThunk } from "../../redux/thunks/blogThunk";

const UpdateBlog = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const blog = blogs.find((blog) => blog._id === id);

  const submit = ({ name, image, time, details, tag1, tag2, tag3, tag4 }) => {
    const blog = {
      name,
      image,
      time,
      details,
      tags: [
        tag1 ? tag1 : null,
        tag2 ? tag2 : null,
        tag3 ? tag3 : null,
        tag4 ? tag4 : null,
      ],
    };
    dispatch(updateBlogThunk(id, blog));
    reset();
    navigate("/dashboard");
  };
  return (
    <div className="flex justify-center items-center h-full ">
      <div>
        <h3 className="text-center font-bold my-5 text-2xl">Update Blog</h3>
        <form
          className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
          onSubmit={handleSubmit(submit)}
        >
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="name">
              Name
            </label>
            <input
              defaultValue={blog.name}
              type="text"
              id="name"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="image">
              Image
            </label>
            <input
              defaultValue={blog.image}
              type="text"
              name="image"
              id="image"
              {...register("image")}
            />
          </div>

          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="time">
              Time
            </label>
            <input
              defaultValue={blog.time}
              type="number"
              name="time"
              id="time"
              {...register("time")}
            />
          </div>

          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="details">
              Description
            </label>
            <input
              defaultValue={blog.details}
              type="text"
              name="details"
              id="details"
              {...register("details")}
            />
          </div>

          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="tag1">
              Tag 1
            </label>
            <input
              defaultValue={blog.tags[0]}
              type="text"
              name="tag1"
              id="tag1"
              {...register("tag1")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="tag2">
              Tag 2
            </label>
            <input
              defaultValue={blog.tags[1]}
              type="text"
              name="tag2"
              id="tag2"
              {...register("tag2")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="tag3">
              Tag 3
            </label>
            <input
              defaultValue={blog.tags[2]}
              type="text"
              name="tag3"
              id="tag3"
              {...register("tag3")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="tag4">
              Tag 4
            </label>
            <input
              defaultValue={blog.tags[3]}
              type="text"
              name="tag4"
              id="tag4"
              {...register("tag4")}
            />
          </div>

          <div className="flex justify-between items-center w-full">
            <button
              className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
