import { clearLocalStorage } from "../../utilities";

const LogOut = () => {
  return <button onClick={() => clearLocalStorage}>Log Out</button>;
};

export default LogOut;
