import React from "react"

export default function Newsletter() {
    return (
        <div className="blogNewsletter">
            <h1>My Newsletter</h1>
            <p>Updates, articles, tips and tricks every week</p>
            <div className="blogNewsletterInputAlign">
                <input type="text" className="blogNewsletterInput" placeholder="Email Address" />
                <div className="blogNewsletterInputEnterAlign">
                    <button className="blogNewsletterInputEnter"><p>Submit</p><i class="fa-solid fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    )
}