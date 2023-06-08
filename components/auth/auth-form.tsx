import { useState, useRef, use } from "react";

async function createUser(username, email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      //log user in
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-primary-yellow">
          {isLogin ? "Cafe Hopping App" : "Create an Account"}
        </h1>
        <form
          className="space-y-4"
          onSubmit={submitHandler}>
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
              ref={emailInputRef}
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
              ref={passwordInputRef}
            />
          </div>
          <div>
            <button className="w-full py-2 px-4 font-semibold text-white bg-primary-coral rounded-md hover:bg-blue-600">
              {isLogin ? "Login" : "SIGN UP"}
            </button>
            <p className="text-primary-gray">
              {isLogin
                ? "You don't have an account?"
                : "You already have an account?"}
            </p>
            <button
              type="button"
              onClick={switchAuthModeHandler}
              className="w-full py-2 px-4 mt-2 text-sm text-blue-500 hover:text-blue-600">
              {isLogin ? "SIGN UP" : "LOG IN"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
