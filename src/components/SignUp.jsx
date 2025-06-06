import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { signUpNewUser } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const result = await signUpNewUser(email, password);
      if (result.success) {
        navigate("/signin");
      } else {
        setError(result.error.message);
      }
    } catch (err) {
      setError("O seguinte erro ocorreu: " + err);
    }
  };

  return (
    <section className="flex min-h-full w-[390px] flex-col justify-center px-6 py-12  lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img alt="Boltfunds" src="./logo.png" className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-50">
          Realize o seu cadastro
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-50"
            >
              E-mail
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-gray-50 outline-1 -outline-offset-1 outline-gray-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-50"
              >
                Senha
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-gray-50 outline-1 -outline-offset-1 outline-gray-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-400 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs cursor-pointer hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Cadastrar
            </button>
          </div>
          {error && <p className="text-red-600 text-center pt-4">{error}</p>}
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Já possui cadastro?{" "}
          <Link
            to="/signin"
            className="font-semibold text-teal-300 hover:text-teal-600"
          >
            Clique aqui para entrar!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
