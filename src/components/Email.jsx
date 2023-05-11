import { useSelector, useDispatch } from "react-redux";
import { changeEmail } from "../redux/userSlice";

const Email = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const handleChange = (e) => {
    dispatch(changeEmail(e.target.value));
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={handleChange}
      />
    </div>
  );
};

export default Email;
