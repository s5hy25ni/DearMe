import { React, useState } from "react";

const LoginInputBox = ({ title, type }) => {
  const [input, setInput] = useState("");

  return (
    <div className="login_input_box">
        <h3 className="login_input_title">{title}</h3>
        <div className="login_input_content">
          <input
            type={type}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
    </div>
  );
};

export default LoginInputBox;