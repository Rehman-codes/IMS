import './login.css';

function Login() {


    return (
        <>
            <section id="login">
                <form>
                    <fieldset>
                        <legend>Enter your credentials</legend>

                        <div>
                            <label htmlFor="username">User name</label>
                            <input id="username" name="username" type="text" />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password" />
                        </div>

                        <div>
                            <button type="submit">Login</button>
                        </div>
                        
                    </fieldset>
                </form>

                <div>
                    <p>Forgot password? <a href="https://www.gmail.com" target='blank'>Click here to reset</a></p>
                </div>

            </section>
        </>
    )
}

export default Login;