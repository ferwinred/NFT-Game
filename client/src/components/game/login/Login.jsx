import React from "react";

function Login() {

    const handleSubmit = () => {
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="mt-6">
          <button type="submit"
          class="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
