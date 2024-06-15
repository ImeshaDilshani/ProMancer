import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListProjects } from '../actions/projectAction';

const ProjectLists = () => {
  // Get data from store
  const dispatch = useDispatch();
  const projectLists = useSelector(state => state.projectLists);
  const {success, loading, projects} = projectLists;

  console.log(projects);

  useEffect(() => {
    dispatch(getListProjects());
  }, []);

  return (
    <div>
      <h1>projectLists</h1>
    </div>
  );
};

export default ProjectLists;