function TuitStats({ tuit }) {
  return (
    <div className="row">
      <div className="col">
        {tuit.likes} <i className="bi bi-heart"></i>
      </div>
      <div className="col">
        {tuit.retuits} <i className="bi bi-arrow-repeat"></i>
      </div>
      <div className="col">
        {tuit.replies} <i className="bi bi-chat"></i>
      </div>
      <div className="col">
        {tuit.views} <i className="bi bi-chat-left"></i>
      </div>
    </div>
  );
}

export default TuitStats;
