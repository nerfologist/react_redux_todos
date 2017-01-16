import React, { PropTypes } from 'react';

const StepList = ({ steps, receiveStep }) => (
  <div>
    Steps:
    <ul>
      { steps.map(step => <li key={step.id}>{step.title}</li>) }
    </ul>
  </div>
);

StepList.propTypes = {
  steps: PropTypes.array.isRequired,
  receiveStep: PropTypes.func.isRequired
};

export default StepList;
