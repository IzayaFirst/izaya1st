import React, { Component } from 'react';
import Head from 'next/head';

class Header extends Component {
    render() {
        return (
            <Head>
                <title>Patchara1st</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.css"/>
            </Head>
        );
    }
}

export default Header;