var React = require("react");
const moment = require("moment");

class Oneclient extends React.Component {
  render() {
    console.log("LIST OF SINGLE CLIENT JSX!!!", this.props.clientInfo);

    let singleClienteleId = this.props.clientInfo[0].clientele_id;
    let singleClientPolicyNumber = this.props.clientInfo[0].policy_number;
    let singleClientPlanName = this.props.clientInfo[0].plan_name;
    let singleClientPolicyStatus = this.props.clientInfo[0].policy_status;
    let singleClientPremiumFrequency = this.props.clientInfo[0].premium_frequency;
    let singleClientPremium = this.props.clientInfo[0].premium;
    //use moment to format the date
    let singleClientInceptionDate = this.props.clientInfo[0].policy_inception_date;
    let formattedInceptionDate = moment(singleClientInceptionDate).format('L');
    //use moment to format the date
    let singleClientCoveragDate = this.props.clientInfo[0].coverage_effective_date;
    let formattedCoverageDate = moment(singleClientCoveragDate).format('L');

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
          <form
            action={"/clientele/" + singleClienteleId + "?_method=put"}
            method="POST"
          >
            Client Policy Info:
            <br/>
            Client Id:
            <input type="text" name="name" value={singleClienteleId} />
            <br />
            Policy Number:
            <input type="text" name="name" value={singleClientPolicyNumber} />
            <br />
            Plan Name:
            <input type="text" name="name" value={singleClientPlanName} />
            <br />
            Plan Status:
            <input type="text" name="name" value={singleClientPolicyStatus} />
            <br />
            Premium Frequency:
            <input type="text" name="name" value={singleClientPremiumFrequency} />
            <br />
            Premium:
            <input type="text" name="name" value={singleClientPremium} />
            <br />
            Policy Inception Date:
            <input type="text" name="name" value={formattedInceptionDate} />
            <br />
            Coverage Effective Date:
            <input type="text" name="name" value={formattedCoverageDate} />
            <br /><br/>
            <form
            action={"/clientele/" + singleClienteleId + "?_method=delete"}
            method="POST"
          >
            <input type="submit" value="Delete Record" />
            </form><br/>
            <input type="submit" value="Update Record" />
          </form>
          <hr />
        </body>
      </html>
    );
  }
}

module.exports = Oneclient;
