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
        <head />
        <body>
        <form action="/policy" method="POST">
            <h1>LIST OF POLICIES!</h1>
            <h3>{policyName}</h3>
        </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;
