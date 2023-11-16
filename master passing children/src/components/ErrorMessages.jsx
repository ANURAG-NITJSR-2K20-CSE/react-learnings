const ErrorMessage = ({items}) => {
//   let foodItems = ["dal", "paneer", "pualo", "soyabean"];
  return (
    <>
      {items.length === 0 && <h3> I am still hungry</h3>}
    </>
  );
};

export default ErrorMessage;
