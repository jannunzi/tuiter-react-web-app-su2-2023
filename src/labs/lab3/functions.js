function Functions() {
  function add(a, b) {
    return a + b;
  }

  const subtract = (q, w) => {
    return q - w;
  };

  const multiply = (x, y) => x * y;

  const square = (x) => x * x;

  const c = add(1, 2);
  const z = subtract(5, 3);

  return (
    <div>
      <h1>Functions</h1>c = {c}
      <br />c = {add(1, 2)}
      <br />z = {z}
    </div>
  );
}

export default Functions;
