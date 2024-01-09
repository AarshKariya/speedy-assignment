import { useState, FunctionComponent, FormEvent, ChangeEvent } from "react";
import ImageUploader from "../imageUpload/ImageUploader";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const Authentication: FunctionComponent = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signupUsername, setSignupUsername] = useState<string>("");
  const [signupPassword, setSignupPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  const handleLogin = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Simulate authentication
    if (username === "demo" && password === "demo123") {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleSignup = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Simulate signup
    const usernameRegex: RegExp = /^[a-zA-Z0-9]+$/; // Regex to allow only alphanumeric characters
    if (
      signupUsername &&
      signupPassword &&
      usernameRegex.test(signupUsername) &&
      firstName &&
      lastName
    ) {
      setUsername(signupUsername); // Auto-login after signup
      setPassword(signupPassword);
      setLoggedIn(true);
      setError("");
    } else {
      setError(
        "Please provide valid username, password, first name, and last name for signup"
      );
    }
  };

  const handleShowSignUp = (): void => {
    setShowSignUp(true);
    setError("");
  };

  return !loggedIn ? (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fff8f6] text-white font-sans p-5">
      <div className="min-w-[300px] max-w-[300px] w-full">
        {!showSignUp ? (
          <LogIn
            handleLogin={handleLogin}
            setUsername={setUsername}
            username={username}
            password={password}
            setPassword={setPassword}
            handleShowSignUp={handleShowSignUp}
          />
        ) : (
          <SignUp
            handleSignup={handleSignup}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            signupUsername={signupUsername}
            setSignupUsername={setSignupUsername}
            signupPassword={signupPassword}
            setSignupPassword={setSignupPassword}
          />
        )}
      </div>
      {error && <p className="text-black">{error}</p>}
    </div>
  ) : (
    <ImageUploader />
  );
};

export default Authentication;
