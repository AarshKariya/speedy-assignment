import { FunctionComponent, ChangeEvent, FormEvent } from "react";

interface LogInProps {
  handleLogin: (e: FormEvent<HTMLFormElement>) => void;
  setUsername: (username: string) => void;
  username: string;
  password: string;
  setPassword: (password: string) => void;
  handleShowSignUp: () => void;
}

const LogIn: FunctionComponent<LogInProps> = ({
  handleLogin,
  setUsername,
  username,
  password,
  setPassword,
  handleShowSignUp,
}) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[#fe5829]">Login!</h2>
      <form
        className="flex flex-col min-w-300 max-w-300 w-full"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          className="mb-4 py-2 px-3 rounded-md border border-gray-300 focus:outline-none text-black focus:border-2 focus:border-[#fe5829]"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          className="mb-4 py-2 px-3 rounded-md border border-gray-300 focus:outline-none text-black focus:border-2 focus:border-[#fe5829]"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-[#fe5829] text-white rounded cursor-pointer transition duration-300 hover:bg-[#fe5829]"
        >
          Login
        </button>
        <button
          className="py-2 px-4 bg-gradient-to-b from-[#fe5829] to-[#fff8f6] border border-gray-300 rounded cursor-pointer mt-3 transition duration-300 text-white hover:text-black"
          onClick={handleShowSignUp}
        >
          New User? Sign-Up!
        </button>
      </form>
    </>
  );
};

export default LogIn;
