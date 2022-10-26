import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import $ from 'jquery'
import axios from "axios";

const tokenConfig = {
  "response_type": "code",
  "client_id": "b3598f689b034fe5a8e332893f67442d",
  "grant_type": "authorization_code",
  Authorization:
            "YjM1OThmNjg5YjAzNGZlNWE4ZTMzMjg5M2Y2NzQ0MmQ6dVhlbVhWSEZDcUNaQk5vcjNtSEU3YkREdWp4TGRmdHdtZ3kwVmtVZWlhWHViUlNPaXFXeE4zUVhMcEt0UE9vRw==",
};

const config = {
    method: "get",
    url: "/sale/categories",
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers':
        //   'Origin, X-Requested-With, Content-Type, Accept',
        Accept: "application/vnd.allegro.public.v1+json",
        // 'Content-Type': 'application/vnd.allegro.public.v1+json',
    },
    Authorization:
            "YjM1OThmNjg5YjAzNGZlNWE4ZTMzMjg5M2Y2NzQ0MmQ6dVhlbVhWSEZDcUNaQk5vcjNtSEU3YkREdWp4TGRmdHdtZ3kwVmtVZWlhWHViUlNPaXFXeE4zUVhMcEt0UE9vRw==",
    // responseType: 'json',
};

function App() {
    axios("https://allegro.pl/auth/oauth/authorize", tokenConfig)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    axios(config)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    // axios
    //   .get('https://api.allegro.pl/sale/categories', {
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //       Accept: 'application/vnd.allegro.public.v1+json',
    //       'Content-Type': 'application/vnd.allegro.public.v1+json',
    //     },
    //     proxy: {
    //       host: 'localhost:3006',
    //       port: 3128,
    //     },
    //   })
    //   .then(function (response) {
    //     console.log('response is : ' + response.data)
    //   })
    //   .catch(function (error) {
    //     if (error.response) {
    //       console.log(error.response.headers)
    //     } else if (error.request) {
    //       console.log(error.request)
    //     } else {
    //       console.log(error.message)
    //     }
    //     console.log(error.config)
    //   })

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
