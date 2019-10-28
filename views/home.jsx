var React = require("react");

class Home extends React.Component {
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
          <form action="/home" method="POST">
            <div class="jumbotron">
              <h1 class="display-4">WELCOME TO UNICORN'S INSURANCE PORTAL!</h1>
                <p class="lead">A comprehensive summary for all your insurance policies!</p>
              <hr class="my-4"/>
                <p>If you are a new user, kindly click on the "Register" to proceed!</p>
                <a class="btn btn-primary btn-lg" href="/register" role="button">REGISTER!</a>
              <hr class="my-4"/>
                <p>If you are an existing user, kindly click on the "Login!" to proceed!</p>
                <a class="btn btn-primary btn-lg" href="/login" role="button">LOGIN!</a>
            </div>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Home;
