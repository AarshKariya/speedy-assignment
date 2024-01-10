import { FunctionComponent, ChangeEvent, FormEvent } from "react";

interface SignUpProps {
  handleSignup: (e: FormEvent<HTMLFormElement>) => void;
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  signupUsername: string;
  setSignupUsername: (username: string) => void;
  signupPassword: string;
  setSignupPassword: (password: string) => void;
}

const SignUp: FunctionComponent<SignUpProps> = ({
  handleSignup,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  signupUsername,
  setSignupUsername,
  signupPassword,
  setSignupPassword,
}) => {
  return (
    <>
      <h2 className="text-[#fe5829] text-2xl font-bold mb-4">Sign-Up!</h2>
      <form
        className="flex flex-col min-w-300 max-w-300 w-full"
        onSubmit={handleSignup}
      >
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFirstName(e.target.value)
          }
          className="mb-4 py-2 px-3 rounded-md border border-gray-300 focus:outline-none text-black focus:border-2 focus:border-[#fe5829]"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
          className="mb-4 py-2 px-3 rounded-md border border-gray-300 focus:outline-none text-black focus:border-2 focus:border-[#fe5829]"
        />
        <input
          type="text"
          placeholder="Username"
          value={signupUsername}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSignupUsername(e.target.value)
          }
          className="mb-4 py-2 px-3 rounded-md border border-gray-300 focus:outline-none text-black focus:border-2 focus:border-[#fe5829]"
        />
        <input
          type="password"
          placeholder="Password"
          value={signupPassword}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSignupPassword(e.target.value)
          }
          className="mb-4 py-2 px-3 rounded-md border border-gray-300 focus:outline-none text-black focus:border-2 focus:border-[#fe5829]"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-[#fe5829] text-white rounded cursor-pointer transition duration-300 hover:bg-[#fe5829]"
        >
          Sign-Up!
        </button>
      </form>
    </>
  );
};

export default SignUp;
