import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-indigo-100 to-purple-200">
        <div className="w-[320px] bg-white shadow-2xl rounded-2xl px-6 py-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Login
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="h-[40px] w-full bg-gray-100 pl-4 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <input
              type="password"
              placeholder="Password"
              className="h-[40px] w-full bg-gray-100 pl-4 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <div className="flex justify-between mt-2 text-gray-700 text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="role" value="student" />
                Student
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="role" value="recruiter" />
                Recruiter
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 h-[40px] w-full bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all"
            >
              Login
            </button>
            <h1>
              Don't have an account{" "}
              <span className="text-blue-800">
                {" "}
                ?<Link to="/login">Signup</Link>
              </span>
            </h1>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
