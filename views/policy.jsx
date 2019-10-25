var React = require("react");

class Login extends React.Component {
  render() {
    console.log("LIST OF POLICY JSX!!!", this.props);

    let policyName = this.props.policiesList.map((PolicyName)=>{
      return (
          <div>
              <p>{PolicyName.plan_name}</p>
              <p>{PolicyName.policy_status}</p>
          </div>
      )
  })



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
        <form action="/policy" method="POST">           
            <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" href="/clientele">
                Clientele
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/policy">
                Policy
              </a>
            </li>
            </ul>
            <h1>LIST OF POLICIES!</h1>
            <h3>{policyName}</h3>
        </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;
