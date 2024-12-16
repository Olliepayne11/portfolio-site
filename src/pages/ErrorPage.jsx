import { Link } from "react-router-dom"
import error from '../assets/error-icon.png'

import '../css/ErrorPage.css'

export default function ErrorPage() {
    return (
        <main>
            <div className="w-100 h-auto d-flex flex-column justify-content-center align-items-center">
                <img src={error} alt="Error Image"></img>
                <br></br>
                <h1>Error 404 - Page Not Found</h1>
                <br></br>
                <Link to='/'><button className="bg-white text-info font-weight-bold border border-3 border-info rounded p-3">Home</button></Link>
            </div>
        </main>
    )
}