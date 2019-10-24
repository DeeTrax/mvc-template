var React = require("react");

class Clientele extends React.Component {
  render() {
    console.log("CLIENT DATAA in JSX FILE:", this.props.clients);

    let userId = this.props.clients.map((ClientName)=>{
        return (
            <div>
                <p>{ClientName.id}</p>
            </div>
        )
    })

    let userName = this.props.clients.map((ClientName)=>{
        return (
            <div>
                <p>{ClientName.name}</p>
            </div>
        )
    })

    let userEmail = this.props.clients.map((ClientName)=>{
        return (
            <div>
                <p>{ClientName.email}</p>
            </div>
        )
    })



    return (
      <html>
        <head/>
        <body>
            <table style={"width:100%"}>
                <tr>
                    <th>ID:</th>
                    <th>Name:</th>
                    <th>Email:</th>
                </tr>
                <tr>
                    <td>{userId}</td>
                    <td>{userName}</td>
                    <td>{userEmail}</td>
                </tr>
            </table>
        </body>
      </html>
    );
  }
}

module.exports = Clientele;
