import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoaderCircle } from "lucide-react";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("");
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const Handlesubmit = async (e) => {
    e.preventDefault();
    seterror("");

    try {
      setloading(true);
      const res = await axios.post(
        "http://localhost:8000/auth/login",
        { email, password, role },
        { withCredentials: true }
      );

      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
      }
    } catch (error) {
      seterror(error?.response?.data?.message || "Something went wrong");
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-indigo-100 to-purple-200">
        <div className="w-[320px] bg-white shadow-2xl rounded-2xl px-6 py-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Login
          </h2>

          {error && (
            <p className="text-red-600 text-sm text-center mb-3">{error}</p>
          )}

          <form className="flex flex-col gap-4" onSubmit={Handlesubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="h-[40px] w-full bg-gray-100 pl-4 rounded-lg outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="h-[40px] w-full bg-gray-100 pl-4 rounded-lg outline-none"
            />

            <div className="flex justify-between mt-2 text-gray-700 text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  onChange={(e) => setrole(e.target.value)}
                />
                Student
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  onChange={(e) => setrole(e.target.value)}
                />
                Recruiter
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 h-[40px] w-full bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <LoaderCircle className="animate-spin" size={18} />
                  Loading...
                </span>
              ) : (
                "Login"
              )}
            </button>

            <h1 className="text-sm text-center">
              Don't have an account ?
              <Link to="/signup" className="text-blue-800 ml-1">
                Signup
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

//now here i am gooing to wrting the code for thee loading fetaue
