import Input from '../../form/Input'
import { Link } from 'react-router-dom'

import styles from '../../form/Form.module.css'

function Register(){

    function handleChange(e){

    }

    return(
        <section className={styles.form_container}>
            <h1>Register</h1>
            <form>
                <Input 
                text="Name"
                type="text"
                name="name"
                placeholder="Type your name"
                handleOnChange={handleChange}
                />
                <Input 
                text="Phone"
                type="text"
                name="phone"
                placeholder="Type your phone"
                handleOnChange={handleChange}
                />
                <Input 
                text="Sector"
                type="text"
                name="sector"
                placeholder="Type your sector"
                handleOnChange={handleChange}
                />
                <Input 
                text="Corfim password"
                type="password"
                name="confirmpassword"
                placeholder="Confirm your password"
                handleOnChange={handleChange}
                />
                <Input 
                text="Admin"
                type="checkbox"
                name="admin"
                placeholder="Is admin?"
                handleOnChange={handleChange}
                />
                <input type="submit" value="Register"/>
            </form>
            <p>
                    Login <Link to="/login">Here</Link>
            </p>
        </section>
    )
}

export default Register