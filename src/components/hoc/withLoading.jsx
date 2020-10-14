// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import LoadingSpinner from '@components/loading-spinner';
// import ErrorIndicator from '@components/error-indicator';

// // const withLoading = () => (Wrapped) => {
// //   class WithLoading extends Component {
// //     render() {
// //       const { loading, failure } = this.props;

// //       if (loading) {
// //         return (
// //           <div className="d-flex justify-content-center">
// //             <LoadingSpinner />
// //           </div>
// //         );
// //       }

// //       if (failure) {
// //         return (
// //           <div className="d-flex justify-content-center">
// //             <ErrorIndicator />
// //           </div>
// //         );
// //       }

// //       return <Wrapped { ...this.props } />;
// //     }
// //   }

// //   WithLoading.propTypes = {
// //     loading: PropTypes.bool.isRequired,
// //     failure: PropTypes.bool.isRequired,
// //   };

// //   return WithLoading;
// // };

// const withLoading = () => (Wrapped) => {
//   const WrappedWithLoading = (props) => {
//     const { loading, failure } = props;
//     const loadingComponent = loading
//       ? (
//         <div className="d-flex justify-content-center">
//           <LoadingSpinner />
//         </div>
//       )
//       : null;

//     const failureComponent = failure
//       ? (
//         <div className="d-flex justify-content-center">
//         <ErrorIndicator />
//       </div>
//       )
//       : null;

//     return (
//       <>
//         { loadingComponent }
//         { failureComponent }
//         <Wrapped { ...props } />
//       </>
//     );
//   };

//   // WrappedWithLoading.propTypes = {
//   //   loading: PropTypes.bool.isRequired,
//   //   failure: PropTypes.bool.isRequired,
//   // };

//   return WrappedWithLoading;
// };

// export default withLoading;
