import React from "react";

const SignUpForm = () => {
    return (
        <div>
            <form>
                Title:
                <select>
                    <option value="">Mr</option>
                    <option value="">Mrs</option>
                    <option value="">Sir</option>
                    <option value="">Ms</option>
                </select> 
                <br /><br />First Name: 
                <input type="text" />
                Last Name:
                <input type="text" />
                <br /><br />
                e-mail:
                <input type="email" />
                <br /><br />
                Phone:
                <input type="phone" />
                <br /><br />
                DoB: 
                <input type="date" />
                <br /><br />
                Gender:
                <input type="radio" name="gender" value="male" />Male
                <input type="radio" name="gender" value="male" />Female
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default SignUpForm;