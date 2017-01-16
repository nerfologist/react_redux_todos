import React, { PropTypes } from 'react';

//import StepForm from './step_form';
import StepListItemContainer from './step_list_item_container';

const StepList = ({ steps }) => (
  <div>
    Steps:
    <ul>
      { steps.map(step => <StepListItemContainer key={step.id} step={step} />) }
    </ul>
    {/*<StepForm />*/}
  </div>
);

StepList.propTypes = {
  steps: PropTypes.array.isRequired
};

export default StepList;
