import { useState } from "react";
import { Priority, type IActivity } from "../../model/activity";
import type { ActivityFormProps } from "../../model/activityProps";

const initialActivity: IActivity = {
  id: 0,
  title: "",
  description: "",
  priority: Priority.Indefinite,
};

const ActivityForm: React.FC<ActivityFormProps> = ({
  selectedActivity,
  updateActivity,
  createActivity,
  cancelActivity,
}: ActivityFormProps) => {
  
    const currentActivity = () => {
    if (selectedActivity.id !== 0) {
      return selectedActivity;
    }
    return initialActivity;
  };

  const [activity, setActivity] = useState<IActivity>(currentActivity());

  const valueHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedActivity.id !== 0) updateActivity(activity);
    else createActivity(activity);
    setActivity(initialActivity);
  };

  const cancelHandler = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    cancelActivity();
    setActivity(initialActivity);
  };

  return (
    <>
      <form key={selectedActivity.id} className="row g-3" onSubmit={submitHandler}>
        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input
            name="title"
            value={activity.title}
            onChange={valueHandler}
            id="title"
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select
            name="priority"
            value={activity.priority}
            onChange={valueHandler}
            id="priority"
            className="form-select"
          >
            <option value="Indefinite">Selecione...</option>
            <option value="Low">Baixa</option>
            <option value="Medium">Normal</option>
            <option value="Hight">Alta</option>
          </select>
        </div>
        <div className="col-md-12">
          <label className="form-label">Descrição</label>
          <textarea
            name="description"
            value={activity.description}
            onChange={valueHandler}
            id="description"
            className="form-control"
          />
          <hr />
        </div>
        <div className="col-12 mt-0">
          {activity.id === 0 ? (
            <button className="btn btn-outline-success" type="submit">
              <i className="fas fa-plus me-2"></i>
              Salvar
            </button>
          ) : (
            <>
              <button className="btn btn-outline-success me-2" type="submit">
                <i className="fas fa-plus me-2"></i>
                Salvar
              </button>
              <button
                className="btn btn-outline-warning"
                onClick={cancelHandler}
              >
                <i className="fas fa-plus me-2"></i>
                Cancelar
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
};
export default ActivityForm;
