const Button = () => {
  return (
    <>
      <button
        onClick={() => {
          alert("Hola mundo desde remote app");
        }}
      >
        Click
      </button>
    </>
  );
};

export default Button;
