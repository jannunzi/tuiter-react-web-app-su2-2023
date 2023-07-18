function WorkingWithArrays() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2"];

  function square(x) {
    return x * x;
  }

  const squares = numberArray1.map((x) => x * x);

  let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1,
  ];
  return (
    <div>
      <h2>Working with Arrays</h2>
      numberArray1 = {numberArray1} <br />
      squares = {squares} <br />
      squares = {JSON.stringify(squares)} <br />
    </div>
  );
}

export default WorkingWithArrays;
