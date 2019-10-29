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
        <div class="jumbotron">
          <form action={"/clientele/" + singleClienteleId + "?_method=put"}
            method="POST">
            <h1>Client Policy Info:</h1>
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
            <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Log Out</a></li>
          </ol>
        </nav>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/clientele">Back</a></li>
          </ol>
        </nav>
        </form>
            {/* <form action={"/clientele/" + singleClienteleId + "?_method=delete"}
            method="POST">
            <button type="submit" class="btn btn-primary">UPDATE RECORD</button>
            </form><br/>
            <button type="submit" class="btn btn-primary">DELETE RECORD</button>
          </form> */}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Oneclient;
