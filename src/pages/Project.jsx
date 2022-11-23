import React from 'react';
import { useParams } from 'react-router-dom';

const Project = ({title}) => {
    const params = useParams();

    return (
        <div>Project page for {params.projectName}</div>
    )
}

export default Project;