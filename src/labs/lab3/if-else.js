function IfElse() {
  const loggedIn = true;
  return (
    <div>
      <h1>If Else</h1>
      {loggedIn && <h2>Welcome Alice</h2>}
      {!loggedIn && <h2>Please log in</h2>}
      <h3>Terniary</h3>
      {loggedIn ? <h2>Welcome Alice</h2> : <h2>Please log in</h2>}
    </div>
  );
}

export default IfElse;
