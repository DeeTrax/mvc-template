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
          <div class="card">
            <div class="card-body">
              <h1 class="card-title">WELCOME TO UNICORN PAGE!</h1>
              <h3 class="card-subtitle mb-2 text-muted">A comprehensive summary for all your insurance policies!</h3>
              <p class="card-text">
                If you are a new user, kindly click on the "Register For New User!" to register!
              </p>
              <a href="/register" class="nav-link active">
                Register For New User!
              </a><br/>
              <p class="card-text">
                If you are an existing user, Kindly click on the "Login For Existing User!" to login!
              </p>
              <a href="/login" class="nav-link active">
                Login For Existing User!
              </a>
            </div>
          </div>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Home;
