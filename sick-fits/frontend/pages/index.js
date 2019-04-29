// import React from 'react';

// class Home extends React.Component {
//     render() {
//         return <p>Hey!</p>
//     }
// }

import Link from 'next/link';

// stateless component
const Home = props => (
    <div>
        <p>
            Hey!
        </p>
        <Link href='/sell'>
            <a>sell</a>
        </Link>
    </div>
)

export default Home;