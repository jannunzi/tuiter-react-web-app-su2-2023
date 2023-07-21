function Add({ a, b }) {
  //   const a = parameters.a;
  //   const b = parameters.b;
  //   const { a, b } = parameters;

  const c = parseInt(a) + parseInt(b);
  return (
    <div>
      <h2>Add</h2>a = {a}
      <br />b = {b}
      <br />a + b = {c}
      {/* <pre>{JSON.stringify(parameters, null, 2)}</pre> */}
    </div>
  );
}

export default Add;
