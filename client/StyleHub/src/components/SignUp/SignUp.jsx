import React, { useState } from 'react';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

function SignUp() {

    const [pageNo, setPageNo] = useState(1);

    const next = () => {
        if (pageNo === 3) {
            return ;
        }
        setPageNo(page => page + 1);
    }

    const prev = () => {
        if (pageNo === 1) {
            return;
        }

        setPageNo(page => page - 1);
    }

    const [user, setUser] = useState(
        {
            profileImage: null,
            name: '',
            email: '',
            phone: ''
        }
    )

    return (
        <div>
            {
                {
                    1: <PageOne user={user} setUser={setUser} next={next}/>,
                    2: <PageTwo user={user} setUser={setUser} next={next} prev={prev}/>,
                    3: <PageThree user={user} setUser={setUser} next={next} prev={prev}/>
                }[pageNo]
            }
        </div>
    );
}

export default SignUp;
