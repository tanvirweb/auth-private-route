import { useContext } from "react";
import { AuthProvide } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userLogin, googleLogin } = useContext(AuthProvide);
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  const handleGoogle = () => {
    googleLogin()
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col max-w-xl w-full">
        <h1 className="text-5xl font-bold mb-4">Login now!</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <div>
            <button onClick={handleGoogle} className="btn btn-primary">Google LogIn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
