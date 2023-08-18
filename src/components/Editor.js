import { dateToFormDate } from "../common/utils";

function Editor({ obj, form, setObj }) {
  return (
    <>
      {Object.entries(form).map(([key, field]) => (
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
      ))}
    </>
  );
}
export default Editor;
