import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoaderCircle } from "lucide-react";

function Signup() {
  const [fullname, setfullname] = useState("");
  const [phoneNumber, setphonenumber] = useState("");
  const [role, setrole] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [file, setfile] = useState(null);
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const Handlesubmit = async (e) => {
    e.preventDefault();
    seterror("");

    try {
      setloading(true);
      const formData = new FormData();
      formData.append("fullname", fullname);
      formData.append("phoneNumber", phoneNumber);
      formData.append("role", role);
      formData.append("email", email);
      formData.append("password", password);
      if (file) {
        formData.append("file", file);
      }

      const res = await axios.post(
        "http://localhost:8000/auth/signup",
        formData,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        navigate("/login");
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
            Create Account
          </h2>

          {error && (
            <p className="text-red-600 text-sm text-center mb-3">{error}</p>
          )}

          <form className="flex flex-col gap-4" onSubmit={Handlesubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setfullname(e.target.value)}
              className="h-[40px] w-full bg-gray-100 pl-4 rounded-lg outline-none"
            />

            <input
              type="number"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setphonenumber(e.target.value)}
              className="h-[40px] w-full bg-gray-100 pl-4 rounded-lg outline-none"
            />

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

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setfile(e.target.files[0])}
              className="h-[40px] w-full bg-gray-100 pl-2 rounded-lg border"
            />

            <button
              type="submit"
              className="mt-4 h-[40px] w-full bg-indigo-600 text-white rounded-lg font-semibold"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <LoaderCircle className="animate-spin" size={18} />
                  Loading...
                </span>
              ) : (
                "Signup"
              )}
            </button>

            <h1 className="text-sm text-center">
              Already have an account ?
              <Link to="/login" className="text-blue-800 ml-1">
                Login
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
