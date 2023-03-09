import { useDispatch } from "react-redux";
import { getMorty } from "../../services";
import { createUser } from "../../redux/states/user";

const Login = () => {
  const dispatch = useDispatch();
  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser(result));
    } catch (error) {
      console.log({ errorLogin: error });
    }
  };

  return (
    <>
      <div>Login</div>
      <button onClick={login}>Login</button>
    </>
  );
};

export default Login;
