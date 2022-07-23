import React from 'react';

function Contact() {
    return (
        <div className = "container d-flex flex-column mb-5" id = "contact">
            <h1 className = "text-center mb-5">Contact</h1>
            <h6 className = "text-center mb-5">このサイト及び私に関して、コメントやご意見のある方は下記フォームをご利用ください。</h6>
            <form  id = "ContactForm" className = "align-self-center">
                <div className = "form-group ml-4">
                    <label>Name: </label><br></br>
                    <input type = "text" className = "form-contol formName" placeholder = "John Doe"></input>
                </div>
                <div className = "form-group ml-4">
                    <label>Email: </label><br></br>
                    <input type = "email" className = "form-contol formEmail" placeholder = "example@email.com"></input>
                </div>
                <div className = "form-group ml-4">
                    <label>Comment: </label><br></br>
                    <textarea className = "form-control formText" rows = "5" placeholder = "This site is bad."></textarea>
                </div>
                <button type = "submit" className = "btn btn-light ml-4 mb-4 border boreder-light">Submit</button>
            </form>
        </div>
    )
}

export default Contact;