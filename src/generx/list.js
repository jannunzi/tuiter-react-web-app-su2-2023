import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import GnrxService from "./service";
import JsonStringify from "./utils";

function GnrxList({
  collection,
  baseUrl,
  label,
  one,
  many,
  ui = {
    fields: {
      title: {
        label: "Title",
      },
    },
  },
}) {
  const service = GnrxService(collection, baseUrl);
  const [objs, setObjs] = useState([]);
  const { id } = useParams();

  const fetchObjs = async () => {
    const objs = await service.findAll();
    setObjs(objs);
  };

  const fetchOneToManyObjs = async () => {
    const objs = await service.findOneToMany(one, id, many);
    setObjs(objs);
  };

  useEffect(() => {
    if (one) {
      fetchOneToManyObjs();
    } else {
      fetchObjs();
    }
  }, []);

  return (
    <div>
      <div className="list-group">
        {objs.map((obj) => (
          <Link to={obj._id} className="list-group-item">
            {label(obj)}
          </Link>
        ))}
      </div>
      <Link to="new" className="btn btn-success float-end mt-2">
        New
      </Link>
    </div>
  );
}

export default GnrxList;
