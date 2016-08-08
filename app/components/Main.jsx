var React = require ('react');
var Navigation = require('Navigation');

// var Main = React.createClass ({
//   render: function () {
//     return (
//       <div>
//         <Nav></Nav>
//         <h2>Main component</h2>
//         {this.props.children}
//       </div>
//
//     );
//   }
// });
var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Navigation/>
          <p>Mian.jsx render</p>
            {props.children}
        </div>

      </div>
    </div>
  );
}


module.exports = Main
