var React = require("react");

class Clientele extends React.Component {
  render() {
    console.log("CLIENT DATAA in JSX FILE:", this.props.clients);

    // let userId = this.props.clients.map(ClientName => {
    //   return (
    //     <div>
    //       <p>{ClientName.id}</p>
    //     </div>
    //   );
    // });

    // let userName = this.props.clients.map(ClientName => {
    //   return (
    //     <div>
    //       <p>{ClientName.name}</p>
    //     </div>
    //   );
    // });

    // let userEmail = this.props.clients.map(ClientName => {
    //   return (
    //     <div>
    //       <p>{ClientName.email}</p>
    //     </div>
    //   );
    // });

    let tableRow = this.props.clients.map(client => {
      return (
        <tr>
          <td>{client.id}</td>
          <td>
            <a href={"/clientele/"+client.id}>{client.name}</a>
          </td>
          <td>{client.email}</td>
        </tr>
      );
    });

    // app.get("/clientele/:banana", (request, response) => {
    //     let userId = request.params.banana; // userId is 1 or 2
    // })

    // app.get("/clientele/:id", clienteleControllerCallback.getOneClientInfo)

    // let getOneClientInfo = (request, response) => {
    //     let userId = request.params.id;

    //     db.clientele.getOneUserInfo(userId, (error, userInfo) => {

    //         const data = {
    //             banana: userInfo
    //         };

    //         response.render("singleClient", data)
    //     })

    // } 


    // data = [1]
    
    // let getOneUserInfo = (userId, callback) => {

    // const query = "SELECT * FROM clientele WHERE user_id = $1";

    // const chicken = [userId];
    
    // pool.query(query, chicken, (error, queryResult) => {
    //     queryResult.rows  // [{id: 1, email: amy@gmail.com, name: Amy}]
    // })



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
          <h1>CLIENTELE LIST!</h1><br/><br/>
          <table>
            <tr>
              <th>ID:</th>
              <th>Name:</th>
              <th>Email:</th>
            </tr>
            {tableRow}
          </table>
          <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Log Out</a></li>
          </ol>
        </nav>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Clientele;
