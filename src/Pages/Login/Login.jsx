import { Link } from "react-router-dom";
import doctor from "../../assets/images/banner/doctor.jpg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = () => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-green-200">
      <div className="hero-content gap-16 flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img className="w-full rounded-3xl" src={doctor} alt="" />
        </div>
        <div className="card bg-green-100 flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <h1 className="text-3xl text-center mt-3 font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                name="password"
                placeholder="password"
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
              <input className="btn bg-green-200" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center p-2">
            New to the Doctor ? <br />
            <Link className="text-black-200 font-bold text-center" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
