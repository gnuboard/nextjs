import Link from "next/link";

const Login = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl my-2">This is Login Page</h2>
      <Link className="underline" href="/">Go to Home</Link>
    </div>
  );
};

export default Login;