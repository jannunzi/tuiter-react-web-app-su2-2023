import TuitStats from "./tuit-stats";

function Tuit({ tuit }) {
  return (
    <div>
      {tuit.tuit}
      <TuitStats tuit={tuit} />
      {JSON.stringify(tuit, null, 2)}
    </div>
  );
}

export default Tuit;
