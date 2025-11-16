import React, { useState } from "react";
import CommonHead from "../components/Common/CommonHead";
import { Link, useNavigate } from "react-router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { Bounce, toast } from "react-toastify";

const Register = () => {
  const ragex = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    pass: /^.{6,}$/,
  };

  const [formdata, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const navigate = useNavigate();

  const [allError, setAllError] = useState({
    emailError: "border-border",
    nameError: "border-border",
    passwordError: "border-border",
  });

  const auth = getAuth();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!ragex.email.test(formdata.email) || !formdata.email) {
      setAllError((prev) => ({ ...prev, emailError: "border-red-500" }));
    }
    if (!ragex.pass.test(formdata.password) || !formdata.password) {
      setAllError((prev) => ({ ...prev, passwordError: "border-red-500" }));
    }
    if (!formdata.username) {
      return setAllError((prev) => ({
        ...prev,
        nameError: "border-red-500",
      }));
    }

    createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
      .then((userCredential) => {
        // update username

        updateProfile(auth.currentUser, {
          displayName: formdata.username,
        })
          .then(() => {
            sendEmailVerification(auth.currentUser).then(() => {
              // Email verification sent!
              toast.success("Verification Email Sent", {
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
              navigate("/login");
              // ...
            });
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode == "auth/email-already-in-use") {
          toast.error("email-already-in-use", {
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
        // ..
      });
  };

  return (
    <>
      <section className="flex items-center justify-center mt-10 mb-18">
        <div>
          <div className="text-center mb-15">
            <CommonHead text1={"Register"} />
          </div>

          <div>
            <form
              onSubmit={handleRegister}
              className="flex flex-col gap-6"
              action=""
            >
              <div>
                <label className="text-base text-black font-popppind font-semibold mb-2">
                  Username
                </label>
                <div
                  className={`w-[440px] h-11 border ${allError.nameError} flex items-center rounded-[12px]`}
                >
                  <input
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }));
                    }}
                    className="text-base w-full text-black font-popppind font-normal border-none outline-none w-full ml-4"
                    type="text"
                  />
                </div>
              </div>

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
              to={"/login"}
              className="text-[#0EA5E9] font-medium link-theme"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
