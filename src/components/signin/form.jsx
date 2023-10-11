import { useState } from "react"
import PropTypes from 'prop-types';

const Form = ({ labelText }) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="emailID">
                    {labelText ? (
                        <span>{labelText}</span>
                    ) : ''}
                    <input 
                        type="email"
                        id="emailID"
                        value={email}
                        onChange={handleEmailChange} />
                </label>
                <button type="submit">Sign In</button>
            </form>
        </>
    )
};

Form.propTypes = {
    labelText: PropTypes.string,
}

export default Form;