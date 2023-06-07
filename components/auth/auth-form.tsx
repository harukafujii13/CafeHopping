import { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  return (
    <section className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Cafe Hopping App" : "Create an Account"}
        </h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <button className="w-full py-2 px-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
              {isLogin ? "Login" : "Create an Account"}
            </button>
            <button
              type="button"
              onClick={switchAuthModeHandler}
              className="w-full py-2 px-4 mt-2 text-sm text-blue-500 hover:text-blue-600">
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
