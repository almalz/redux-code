import React, { Component } from 'react'

export class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '862583825780-50fq34iohrkuddfovmlavhdnvps6io8c.apps.googleusercontent.com',
                scope: 'email'
            })
        });
        
    }

    render() {
        return (
            <div>
                GoogleAuth
            </div>
        )
    }
}

export default GoogleAuth
