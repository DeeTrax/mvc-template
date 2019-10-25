var React = require("react");

class Register extends React.Component {
  render() {
    console.log(this.props);
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          ></link>
        </head>
        <body>
        <form action="/register" method="POST">
            <h3>Please Register!</h3>
            <p>
              Name: <input type="text" name="name" />
            </p>
            <p>
              Email: <input type="email" name="email" />
            </p>
            <p>
              Password: <input type="password" name="password" />
            </p>
            <p>
              <input type="submit" />
            </p>
        </form>
        </body>
      </html>
    );
  }
}

module.exports = Register;
