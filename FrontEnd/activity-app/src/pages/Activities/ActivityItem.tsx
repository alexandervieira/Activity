import React from "react";
import type { ActivityItemProps } from "../../model/activityProps";
import { Priority } from "../../model/activity";

const ActivityItem: React.FC<ActivityItemProps> = ({
  activ,
  getActivity,
  confirmModalHandler,
}: ActivityItemProps) => {
    
  const priorityLabel = (param: string) => {
    switch (param) {
      case Priority.Low:
      case Priority.Medium:
      case Priority.High:
        return param;
      default:
        return "Indefinite";
    }
  };

  const priorityStyle = (param: string, isIcon: boolean) => {
    switch (param) {
      case Priority.Low:
        return isIcon ? "smile" : "success";
      case Priority.Medium:
        return isIcon ? "meh" : "dark";
      case Priority.High:
        return isIcon ? "frown" : "warning";
      default:
        return "Indefinite";
    }
  };

  return (
    <div
      className={
        "card mb-2 shadow-sm border-" + priorityStyle(activ.priority, false)
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge bg-secondary me-1">{activ.id}</span>-{" "}
            {activ.title}
          </h5>
          <h6>
            Prioridade:
            <span
              className={"ms-1 text-" + priorityStyle(activ.priority, false)}
            >
              <i
                className={"me-1 far fa-" + priorityStyle(activ.priority, true)}
              ></i>
              {priorityLabel(activ.priority)}
            </span>
          </h6>
        </div>
        <p className="card-text">{activ.description}</p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button
            className="btn btn-sm btn-outline-primary me-2"
            onClick={() => getActivity(activ.id)}
          >
            <i className="fas fa-pen me-2"></i>
            Editar
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => confirmModalHandler(activ.id)}
          >
            <i className="fas fa-trash me-2"></i>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
