const LoginButton = ({ text, type, onClick }) => {
  const btnType = ["yes", "no"].includes(type) ? type : "yes";

  return (
    <div className={["login_button", `login_button_${btnType}`].join(" ")}>
      <button
        onClick={onClick}
      >
        {text}
      </button>
      </div>
  );
};

LoginButton.defaultProps = {
  type:"default",
}

export default LoginButton;
