import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from './Button'

import "./TaskInfo.css";

const TaskInfo = () => {
    const params = useParams();
    const history= useHistory();

    const handleBackButtonCLick = () => {
        history.push("/");
    }
    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonCLick}> Voltar </Button>
            </div>
            <div className="task-info-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dosor sit amet consectetur adipisicing elit. Laborum ex corporis explicabo eaque repellendus? Tempore consectetur placeat consequuntur, culpa earum laboriosam veritatis, assumenda deleniti facilis dolorum rerum exercitationem reiciendis molestiae.
                </p>
            </div>
        </>
     );
};

export default TaskInfo;