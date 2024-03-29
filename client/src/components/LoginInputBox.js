import { React } from "react";

const LoginInputBox = ({ title, type, id, onChange, placeholder }) => {

  return (
    <div className="login_input_box">
        <h3 className="login_input_title">{title}</h3>
        <div className="login_input_content">
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
    </div>
  );
};

export default LoginInputBox;