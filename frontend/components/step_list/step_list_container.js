import { connect } from 'react-redux';

import { allStepsByTodoId } from '../../reducers/selectors';
import { receiveStep } from '../../actions/step_actions';
import StepList from './step_list';

const mapStateToProps = (state, { todo }) => ({
  steps: allStepsByTodoId(state, todo.id)
});

const mapDispatchToProps = (dispatch, step) => ({
  receiveStep: () => dispatch(receiveStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
