const LoginButton = ({ text, onClick }) => {

  return (
    <div className="login_button">
      <button
        onClick={onClick}
      >
        {text}
      </button>
      </div>
  );
};

export default LoginButton;
