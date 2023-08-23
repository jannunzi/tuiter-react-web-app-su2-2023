import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import GnrxService from "./service";
import JsonStringify from "./utils";
import { dateToFormDate } from "./utils";

function GnrxEdit({ heading, collection, baseUrl, form, many }) {
  const service = GnrxService(collection, baseUrl);
  const [obj, setObj] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();

  const fetchObj = async () => {
    const obj = await service.findOne(id);
    setObj(obj);
  };

  const handleSave = async () => {
    if (id === "new") {
      await service.create(obj);
    } else {
      await service.update(id, obj);
    }
    navigate(-1);
  };

  const handleDelete = async () => {
    await service.remove(id);
    navigate(-1);
  };

  useEffect(() => {
    if (id !== "new") {
      fetchObj();
    }
  }, []);

  return (
    <div>
      {heading && <h2>{heading}</h2>}
      {Object.entries(form).map(([key, field]) => {
        return (
          <div key={key} className="row mb-2">
            <div className="col-3">
              <label htmlFor={field} className="mt-1 text-capitalize">
                {field.label && field.label}
                {!field.label && <span>{key}</span>}
              </label>
            </div>
            <div className="col-9">
              {(!field.widget ||
                field.widget === "text" ||
                field.widget === "password") && (
                <input
                  id={key}
                  type={field.widget === "password" ? "password" : "text"}
                  onChange={(e) => setObj({ ...obj, [key]: e.target.value })}
                  className="form-control"
                  defaultValue={obj[key]}
                />
              )}
              {field.widget === "select" && (
                <select
                  defaultValue={obj[key]}
                  onChange={(e) => setObj({ ...obj, [key]: e.target.value })}
                  className="form-control"
                >
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
              {field.widget === "date" && (
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setObj({ ...obj, [key]: e.target.value })}
                  defaultValue={dateToFormDate(obj[key])}
                />
              )}
            </div>
          </div>
        );
      })}
      {many && (
        <Link className="text-capitalize" to={many}>
          {many}
        </Link>
      )}
      <button className="btn btn-success float-end" onClick={handleSave}>
        Save
      </button>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-warning float-end me-2"
      >
        Done
      </button>
      {id !== "new" && (
        <button
          onClick={() => navigate(-1)}
          className="btn btn-danger float-end me-2"
        >
          Delete{" "}
        </button>
      )}
    </div>
  );
}

export default GnrxEdit;
