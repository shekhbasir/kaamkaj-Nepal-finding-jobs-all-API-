import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "../components/ui/input";
// import { motion } from "framer-motion";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  Calendar,
  Globe,
  Github,
  Linkedin,
  GraduationCap,
  FileText,
  Camera,
  Edit3,
  Save,
  Eye,
  Moon,
  Sun,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

function Hamarprofile() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ================== UI STATES ================== */
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [previewOpen, setPreviewOpen] = useState(false);
  const [resumePreview, setResumePreview] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const [form, setForm] = useState({
    fullname: user.fullname || "",
    email: user.email || "",
    phoneNumber: user.phoneNumber || "",
    role: user.role || "",
    bio: user.profile?.bio || "",
    skills: user.profile?.skill?.join(",") || "",
    company: user.profile?.componey || "",
    experience: user.profile?.experience || "",
    education: user.profile?.education || "",
    github: user.profile?.github || "",
    linkedin: user.profile?.linkedin || "",
    website: user.profile?.website || "",
    address: user.profile?.address || "",
    city: user.profile?.city || "",
    state: user.profile?.state || "",
    country: user.profile?.country || "",
    zipcode: user.profile?.zipcode || "",
    dateOfBirth: user.profile?.dateOfBirth || "",
    gender: user.profile?.gender || "",
    maritalStatus: user.profile?.maritalStatus || "",
    languages: user.profile?.languages?.join(",") || "",
    hobbies: user.profile?.hobbies?.join(",") || "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);

  const profileImage = user?.profile?.profilePhoto
    ? `data:${user.profile.profilePhoto.contentType};base64,${user.profile.profilePhoto.data}`
    : "/default-profile.png";

  const completionFields = [
    user.fullname,
    user.email,
    user.phoneNumber,
    user.profile?.bio,
    user.profile?.skill?.length,
    user.profile?.resume,
    user.profile?.github,
    user.profile?.linkedin,
  ];

  const completion = Math.round(
    (completionFields.filter(Boolean).length / completionFields.length) * 100
  );

  const strength =
    completion < 40 ? "Weak" : completion < 70 ? "Medium" : "Strong";

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => formData.append(key, form[key]));
      if (imageFile) formData.append("file", imageFile);
      else if (resumeFile) formData.append("file", resumeFile);

      const res = await axios.put(
        "http://localhost:8000/auth/pupdate",
        formData,
        { withCredentials: true }
      );

      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user);
        setEdit(false);
        setImageFile(null);
        setResumeFile(null);
      }
    } catch {
      alert("Update failed");
    }
    setLoading(false);
  };

  const Tag = ({ text }) => (
    <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-white text-xs">
      {text}
    </span>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-10 flex justify-center">
      <div className="w-[95%] lg:w-[75%] relative">
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <Button onClick={() => setEdit(true)}>
            <Edit3 size={16} />
          </Button>
          <Button onClick={() => setPreviewOpen(true)}>
            <Eye size={16} />
          </Button>
          <Button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8"
        >
          <div className="flex flex-col md:flex-row gap-8 border-b pb-6">
            <div className="relative">
              <img
                src={profileImage}
                className="h-32 w-32 rounded-full border-4 border-indigo-500 object-cover"
              />
              {edit && (
                <label className="absolute bottom-1 right-1 bg-indigo-600 p-2 rounded-full cursor-pointer">
                  <Camera size={14} className="text-white" />
                  <input
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                  />
                </label>
              )}
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <User /> {user.fullname}
              </h1>
              <p className="text-indigo-600 flex items-center gap-2">
                <Briefcase size={16} /> {user.role.toUpperCase()}
              </p>
              <p className="text-gray-500 flex items-center gap-2">
                <Mail size={16} /> {user.email}
              </p>

              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Profile Completion</span>
                  <span>{completion}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${completion}%` }}
                    className={`h-full ${
                      completion < 40
                        ? "bg-red-500"
                        : completion < 70
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  />
                </div>
                <p className="text-xs mt-1 text-gray-500">
                  Profile strength: <b>{strength}</b>
                </p>
              </div>
            </div>
          </div>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            {edit ? (
              <Input
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
              />
            ) : (
              <p className="text-gray-700 dark:text-gray-300">
                {user.profile?.bio || "N/A"}
              </p>
            )}
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            {edit ? (
              <Input
                value={form.skills}
                onChange={(e) => setForm({ ...form, skills: e.target.value })}
              />
            ) : (
              <div className="flex flex-wrap gap-2">
                {(user.profile?.skill || []).map((s, i) => (
                  <Tag key={i} text={s} />
                ))}
              </div>
            )}
          </section>

          <section className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              { k: "phoneNumber", l: "Phone", i: Phone },
              { k: "education", l: "Education", i: GraduationCap },
              { k: "company", l: "Company", i: Briefcase },
              { k: "city", l: "City", i: MapPin },
              { k: "website", l: "Website", i: Globe },
              { k: "github", l: "GitHub", i: Github },
              { k: "linkedin", l: "LinkedIn", i: Linkedin },
            ].map((f) => (
              <div
                key={f.k}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow"
              >
                <h3 className="flex items-center gap-2 text-sm font-semibold">
                  <f.i size={16} /> {f.l}
                </h3>
                {edit ? (
                  <Input
                    className="mt-2"
                    value={form[f.k]}
                    onChange={(e) =>
                      setForm({ ...form, [f.k]: e.target.value })
                    }
                  />
                ) : (
                  <p className="mt-1">
                    {user.profile?.[f.k] || user[f.k] || "N/A"}
                  </p>
                )}
              </div>
            ))}
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FileText /> Resume
            </h2>

            {user.profile?.resume ? (
              <div className="flex gap-4 items-center mt-2">
                <span className="text-green-600 flex items-center gap-1">
                  <CheckCircle size={16} /> Uploaded
                </span>
                <Button onClick={() => setResumePreview(true)}>Preview</Button>
              </div>
            ) : (
              <span className="text-yellow-600 flex items-center gap-1 mt-2">
                <AlertTriangle size={16} /> Not Uploaded
              </span>
            )}

            {edit && (
              <Input
                type="file"
                className="mt-2"
                onChange={(e) => setResumeFile(e.target.files[0])}
              />
            )}
          </section>

          {edit && (
            <div className="mt-8">
              <Button
                onClick={handleUpdate}
                disabled={loading}
                className="bg-gradient-to-r from-indigo-600 to-purple-600"
              >
                <Save size={16} className="mr-2" />
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          )}
        </motion.div>
      </div>

      {previewOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-[90%] md:w-[60%]">
            <h2 className="text-2xl font-bold mb-4">Public Profile Preview</h2>
            <p>{user.profile?.bio}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(user.profile?.skill || []).map((s, i) => (
                <Tag key={i} text={s} />
              ))}
            </div>
            <Button className="mt-6" onClick={() => setPreviewOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      )}

      {resumePreview && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-[90%] h-[80%]">
            <iframe
              src={`data:application/pdf;base64,${user.profile.resume}`}
              className="w-full h-full rounded"
            />
            <Button className="mt-4" onClick={() => setResumePreview(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hamarprofile;
