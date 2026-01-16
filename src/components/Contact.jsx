import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/raeqjora", data);
      toast.success("Your message has been sent successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.log(error);
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-gray-600 mb-6">
        Feel free to reach out for collaborations, opportunities, or inquiries.
      </p>

      <div className="flex flex-col items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 border border-gray-200"
        >
          <h2 className="text-xl font-semibold mb-5 text-center">
            Send a Message
          </h2>

          {/* Name */}
          <div className="mb-5">
            <label className="block text-gray-700 mb-1 font-medium">
              Full Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-gray-700 mb-1 font-medium">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-5">
            <label className="block text-gray-700 mb-1 font-medium">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full px-3 py-2 border rounded-lg shadow-sm h-28 resize-none focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Write your message..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
