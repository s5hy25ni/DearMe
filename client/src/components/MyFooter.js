const MyFooter = ({ leftChild, rightChild }) => {
  return (
    <footer>
      <div className="foot_btn_left">{leftChild}</div>
      <div className="foot_btn_right">{rightChild}</div>
    </footer>
  );
};

export default MyFooter;