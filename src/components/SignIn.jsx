import AuthForm from "./AuthForm/AuthForm.jsx";

const SignIn = ({setIsAuth}) => {
  return <AuthForm isSignUp={false} setIsAuth={setIsAuth}/>;
};

export default SignIn;
