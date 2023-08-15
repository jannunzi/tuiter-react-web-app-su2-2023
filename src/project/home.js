import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/project/search">Search</Link>
    </div>
  );
}

export default Home;
