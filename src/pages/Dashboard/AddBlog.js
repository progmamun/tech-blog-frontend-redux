import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBlogThunk } from "../../redux/thunks/blogThunk";

const AddBlog = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const submit = ({ name, image, time, details, tag1, tag2 }) => {
    const blog = {
      name,
      image,
      time,
      details,
      tags: [tag1 ? tag1 : null, tag2 ? tag2 : null],
    };

    dispatch(addBlogThunk(blog));
    reset();
  };
  return (
    <div className="flex justify-center items-center h-full ">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="name">
            Title of Article
          </label>
          <input
            className="input-box"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            className="input-box"
            type="text"
            name="image"
            id="image"
            placeholder="please enter image url"
            {...register("image")}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="time">
            Reading Time
          </label>
          <input
            className="input-box"
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
          <textarea
            className="input-box"
            type="text"
            name="details"
            id="details"
            placeholder="Write your thoughts here..."
            {...register("details")}
          />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="tag1">
            Tag 1
          </label>
          <input
            className="input-box"
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
            className="input-box"
            type="text"
            name="tag2"
            id="tag2"
            {...register("tag2")}
          />
        </div>

        <div className="flex justify-between items-center w-full">
          <button
            className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
