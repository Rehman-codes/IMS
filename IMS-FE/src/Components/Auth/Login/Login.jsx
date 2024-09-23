import './login.css';
import { useState, useEffect } from 'react';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function updatePassword(e) {
        console.log(e.target.value);
        setPassword(e.target.value)
    }

    function updateUsername(e) {
        console.log(e.target.value);
        setUsername(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted with", { username, password });

        fetch('http://localhost:5035/api/auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Username: username,
                Password: password
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });


            // fetch('http://localhost:5035/', {
            //     method: 'GET',
            // })
            // .then(response => response.text())
            // .then(data => console.log(data))
            // .catch(error => console.error('Error:', error));
            
    }

    return (
        <>
            <section id="login">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Enter your credentials</legend>

                        <div>
                            <label htmlFor="username">User name</label>
                            <input id="username" name="username" type="text" required minLength={4} onChange={(e) => { updateUsername(e) }} />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password" required minLength={8} onChange={(e) => { updatePassword(e) }} />
                        </div>

                        <div>
                            <button type="submit">Login</button>
                        </div>

                    </fieldset>
                </form>

                <div>
                    <p>Forgot password? <a href="https://www.gmail.com" target='_blank'>Click here to reset</a></p>
                </div>

            </section>
        </>
    )
}

export default Login;