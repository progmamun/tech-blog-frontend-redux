import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addBlogThunk } from "../../redux/thunks/blogThunk";

const AddBlog = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

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
            Name
          </label>
          <input type="text" id="name" {...register("name")} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="image">
            Image
          </label>
          <input type="text" name="image" id="image" {...register("image")} />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="time">
            Time
          </label>
          <input type="number" name="time" id="time" {...register("time")} />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="details">
            Description
          </label>
          <input
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
          <input type="text" name="tag1" id="tag1" {...register("tag1")} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="tag2">
            Tag 2
          </label>
          <input type="text" name="tag2" id="tag2" {...register("tag2")} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="tag3">
            Tag 3
          </label>
          <input type="text" name="tag3" id="tag3" {...register("tag3")} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="tag4">
            Tag 4
          </label>
          <input type="text" name="tag4" id="tag4" {...register("tag4")} />
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
