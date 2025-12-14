import React from "react";
import type { ActivitiesProps } from "../../model/activityProps";
import ActivityItem from "./ActivityItem";

const Activities: React.FC<ActivitiesProps> = ({
  activities,
  getActivity,
  confirmModalHandler,
}: ActivitiesProps) => {
  return (
    <div className="mt-3">
      {activities.map((activ) => (
        <ActivityItem
          key={activ.id}
          activ={activ}
          getActivity={getActivity}
          confirmModalHandler={confirmModalHandler}
        />
      ))}
    </div>
  );
};
export default Activities;
