import { connect } from 'react-redux';

// import Main from '@components/main/main.jsx';


const mapStateToProps = (state) => (
  { value: state }
);

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INC' }),
  decrement: () => dispatch({ type: 'DEC' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
