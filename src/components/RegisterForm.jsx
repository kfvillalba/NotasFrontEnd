import React from "react";

const RegisterForm = ({ handleShowAuthForm }) => {
  return (
    <div className="h-full w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-1">
          <p
            tabIndex="0"
            className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
          >
            Regístrate
          </p>
          <div className="mt-6">
            <label
              htmlFor="username"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Nombre de usuario
            </label>
            <input
              id="username"
              type="text"
              className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor="password"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Contraseña
            </label>
            <div className="relative flex items-center justify-center">
              <input
                id="password"
                type="password"
                className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Icono de visibilidad de contraseña */}
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              role="button"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 bg-gray-800 py-3 text-base font-medium rounded-lg w-full text-white"
            >
              Registrarse
            </button>
          </div>
          {/* Enlace para volver al formulario de inicio de sesión */}
          <div
            className="mt-4 text-sm text-gray-500 justify"
            style={{ textAlign: "center" }}
          >
            ¿Ya tienes una cuenta?{" "}
            <button
              onClick={handleShowAuthForm}
              className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline font-medium leading-none cursor-pointer text-black"
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
