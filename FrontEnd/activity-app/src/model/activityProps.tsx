import type { IActivity } from "./activity";

export interface ActivityItemProps {
    activ: IActivity;
    getActivity: (id: number) => void;
    confirmModalHandler: (id: number) => void;
}

export interface ActivitiesProps {
    activities: IActivity[];
    getActivity: (id: number) => void;
    confirmModalHandler: (id: number) => void;
}

export interface ActivityFormProps {
    selectedActivity: IActivity;
    updateActivity: (activity: IActivity) => void;
    createActivity: (activity: IActivity) => void;
    cancelActivity: () => void;
}