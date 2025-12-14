import React, { useEffect, useState } from 'react'
import { Priority, type IActivity } from '../../model/activity';
import { api } from '../../services/api';
import Title from '../../components/ui/Title';
import { Button, Modal } from 'react-bootstrap';
import Activities from './Activities';
import ActivityForm from './activityForm';

const initialActivity: IActivity = {
  id: 0,
  title: "",
  description: "",
  priority: Priority.Indefinite,
}

const Activity: React.FC = () => {

  const [showActivityModal, setShowActivityModal] = useState(false);
  const [smShowConfirmModal, setSmShowConfirmModal] = useState(false);
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [activity, setActivity] = useState<IActivity>(initialActivity);

  const activityModalHandler = () => {
    setShowActivityModal(!showActivityModal)
  }

  const confirmModalHandler = (id: number) => {
    if (id !== 0 && id !== undefined) {
      const filteredActivities = activities.filter((act) => act.id === id);
      setActivity(filteredActivities[0])      
    } else {
      setActivity(initialActivity)
    }
    setSmShowConfirmModal(!smShowConfirmModal);
  }

  const geAlltActivities = async () => {
    try {
      /* const response = await api.get('activity');
      setActivities(response.data);      
      return response.data; */
      const activities = [
        {id: 1, title: 'Título 1', description: 'Descrição atividade 1', priority: Priority.Low},
        {id: 2, title: 'Título 2', description: 'Descrição atividade 2', priority: Priority.Medium},
        {id: 3, title: 'Título 3', description: 'Descrição atividade 3', priority: Priority.High}        
      ];
      setActivities(activities);
      return activities;
      
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  }

  const newActivity = () => {
    setActivity(initialActivity);
    activityModalHandler();
  }

  useEffect(() => {
    const getActivities = async () => {
      const getAllActivities = await geAlltActivities();
      if (getAllActivities) setActivities(getAllActivities);
    };
    getActivities();
  }, []);

  const createActivity = async (activ: IActivity) => {
    activityModalHandler();
    try {
      const response = await api.post('activity', activ);
      setActivities([...activities, response.data]);
    } catch (error) {
      console.error("Error creating activity:", error);
    }
  }

  const cancelActivity = () => {
    setActivity(initialActivity);
    activityModalHandler();
  }

  const updateActivity = async (activ: IActivity) => {
    activityModalHandler();
    try {
      const response = await api.put(`activity/${activ.id}`, activ);
      const {id} = response.data;
      setActivities(activities.map((act) => (act.id === id ? response.data : act)));
      setActivity(initialActivity);
      
    } catch (error) {
      console.error("Error updating activity:", error);      
    }
  }

  const deleteActivity = async (id: number) => {
    confirmModalHandler(0);
    try {
      if (await api.delete(`activity/${id}`)){        
        const filteredActivities = activities.filter((act) => act.id !== id);
        setActivities(filteredActivities);
      }     
    } catch (error) {
      console.error("Error deleting activity:", error);
    }
  }

  const getActivity = (id: number) => {
    const filteredActivities = activities.filter((act) => act.id === id);
    setActivity(filteredActivities[0]);
    activityModalHandler();  
  }

 return (
        <>
            <Title
                title={'Atividade ' + (activity.id !== 0 ? activity.id : '')}
            >
                <Button variant='outline-secondary' onClick={newActivity}>
                    <i className='fas fa-plus'></i>
                </Button>
            </Title>

            <Activities
                activities={activities}
                getActivity={getActivity}
                confirmModalHandler={confirmModalHandler}
            />

            <Modal show={showActivityModal} onHide={activityModalHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Atividade {activity.id !== 0 ? activity.id : ''}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ActivityForm
                        createActivity={createActivity}
                        cancelActivity={cancelActivity}
                        updateActivity={updateActivity}
                        selectedActivity={activity}
                    />
                </Modal.Body>
            </Modal>

            <Modal
                size='sm'
                show={smShowConfirmModal}
                onHide={() => confirmModalHandler(0)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Excluindo Atividade{' '}
                        {activity.id !== 0 ? activity.id : ''}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tem certeza que deseja Excluir a Atividade {activity.id}
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <button
                        className='btn btn-outline-success me-2'
                        onClick={() => deleteActivity(activity.id)}
                    >
                        <i className='fas fa-check me-2'></i>
                        Sim
                    </button>
                    <button
                        className='btn btn-danger me-2'
                        onClick={() => confirmModalHandler(0)}
                    >
                        <i className='fas fa-times me-2'></i>
                        Não
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Activity;