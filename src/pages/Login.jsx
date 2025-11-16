import React, { useState } from "react";
import CommonHead from "../components/Common/CommonHead";
import { Link, useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Bounce, toast } from "react-toastify";

const Login = () => {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [allError, setAllError] = useState({
    emailError: "border-border",
    passwordError: "border-border",
  });

  const auth = getAuth();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!formdata.email) {
      setAllError((prev) => ({ ...prev, emailError: "border-red-500" }));
    }
    if (!formdata.password) {
      return setAllError((prev) => ({
        ...prev,
        passwordError: "border-red-500",
      }));
    }

    signInWithEmailAndPassword(auth, formdata.email, formdata.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        if (user.emailVerified === false) {
          toast.warning("Please verify your email address", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        } else {
          toast.success("Login Success", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });

          navigate("/");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode) {
          toast.error("Something went wrong", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      });
  };

  return (
    <>
      <section className="flex items-center justify-center mt-10 mb-18">
        <div>
          <div className="text-center mb-15">
            <CommonHead text1={"Login"} />
          </div>

          <div>
            <form
              onSubmit={handleRegister}
              className="flex flex-col gap-6"
              action=""
            >
              <div>
                <label className="text-base text-black font-popppind font-semibold mb-2">
                  Email
                </label>
                <div
                  className={`w-[440px] h-11 border ${allError.emailError} flex items-center rounded-[12px]`}
                >
                  <input
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }));
                    }}
                    className="text-base w-full text-black font-popppind font-normal border-none outline-none ml-4"
                    type="email"
                  />
                </div>
              </div>

              <div>
                <label className="text-base text-black font-popppind font-semibold mb-2">
                  Password
                </label>
                <div
                  className={`w-[440px] h-11 border ${allError.passwordError} flex items-center rounded-[12px]`}
                >
                  <input
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }));
                    }}
                    className="text-base w-full text-black font-popppind font-normal border-none outline-none ml-4"
                    type="password"
                  />
                </div>
              </div>

              <button className="w-[440px] cursor-pointer h-13 rounded-[9999px] bg-black text-base text-white font-medium font-popppind">
                Continue
              </button>
            </form>
          </div>

          <div className="mt-6 mb-6 flex items-center justify-between w-[440px]">
            <div className="br1 w-[200px] border-b border-border"></div>
            <h2 className="text-sm text-black font-medium font-popppind">OR</h2>
            <div className="br2 w-[200px] border-b border-border"></div>
          </div>

          <div className="mt-6 text-center text-base text-[#4B5563] font-popppind font-normal">
            Already have an account?{" "}
            <Link
              to={"/register"}
              className="text-[#0EA5E9] font-medium link-theme"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
