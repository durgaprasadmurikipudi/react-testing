import React from 'react';

/**
 * export functional component Congrats to show the success message.
 * @function
 * @param {object} props - props received by component
 * @returns {JSX.Element}
 */

 export default class Congrats extends React.Component {
   render() {     
    return (
      <div data-test="congrats-component" className="alert alert-success">
        {this.props.success ? <span data-test="congrats-message">Congratulations!!!</span> : null}
      </div>
    )
   }
 }