import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
// import { changeMatchState } from '../store/userSlice';

export default function RootLayout() {
    // const states = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // const [toggleNavMenu, setToggleNavMenu] = useState(false);
    // const matchingState = useSelector(state => state.user.matchingState);
    // const dispatch = useDispatch();
    // const isAuthenticated = useSelector(state => true);


    // // Added for dev purposes only
    // const updateState = (e) => {
    //     console.log(e.target.innerText);
    //     dispatch(changeMatchState(e.target.innerText));
    // };

    // const handleClick = () => {
    //     // !toggleNavMenu ? setToggleNavMenu(true) : setToggleNavMenu(false)
    //     setToggleNavMenu(current => !current);
    // };
    // const activeStyling = {
    //     color: '#ef8354',
    //     borderBottom: '1px solid #bfc0c0',
    //     fontSize: '1.1rem'
    // };


    return (
        <div className='root-layout'>
            {/* <AuthStatus /> */}

            <header className='App-header'>
                <ul className='navBar'>
                    <li className='App-link'>
                        <div></div>
                        <NavLink to='/' exact activeClassName='active' viewTransition>Dashboard</NavLink>
                    </li>
                    <li className='App-link'>
                        <NavLink to='/projects' activeClassName='active' viewTransition>Projects</NavLink>
                    </li>
                    <li className='App-link'>
                        <NavLink to='/about' activeClassName='active' viewTransition>About</NavLink>
                    </li>
                    <li className='App-link'>
                        <NavLink to='/resume' activeClassName='active' viewTransition>Resume</NavLink>
                    </li>
                </ul>
            </header>
            <main className='App-mainContent'>
                <Outlet />
            </main>
            {/* <footer className='App-footer'>
                <p>Footer</p>
            </footer> */}
        </div>
    );
}


