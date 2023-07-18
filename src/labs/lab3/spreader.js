function Spreader() {
  const arr1 = [1, 2, 3];
  const arr2 = [3, 4, 5, ...arr1, 4, 5, ...arr1, 6];
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { ...obj1, d: 4, e: 5, f: 6 };
  const obj3 = { ...obj1, b: 4 };

  return (
    <div>
      <h1>Spreader</h1>
      arr1 = {arr1}
      <br />
      arr2 = {arr2}
      <br />
      obj1 = {JSON.stringify(obj1)}
      <br />
      obj2 = {JSON.stringify(obj2)}
      <br />
      obj3 = {JSON.stringify(obj3)}
    </div>
  );
}

export default Spreader;
