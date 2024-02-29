import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [points, setPoints] = useState('');

  const handleSubmit = e => {
    e.preventDefault(); {/* This prevents the default page refresh when you submit a form */}

    // Checks if taskName and points aren't empty
    if (taskName.trim() === '' || points.trim() === '') {
      alert('Please enter a chore name and point value.');
      return;
    }
    
    if (isNaN(points)) {
      alert('Points must be valid numbers.');
      return;
    }

    //Call addTask Fn with new chore data
    addTask({  name: taskName, points: points });

    // To clean input fields right after
    setTaskName('');
    setPoints('');
  }

  return (
    
    <form className='AddTaskForm' onSubmit={handleSubmit}>
      <h2 className='task-form-description'>Craft Your Adventure! <br/>Add your own chore and set a point value.</h2>
      <input 
        type='text' 
        className='addTask-input'
        placeholder="Chore Description"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)} />
      <input 
        type='number' 
        className='addTask-input'
        placeholder="Points to earn"
        value={points}
        onChange={(e) => setPoints(e.target.value)} />
        <button 
          type='submit' 
          className='addTask-btn'>
            Add Chore
          </button>
      
    </form>
  )
}

export default AddTaskForm;