import "./footerStyle.css"
function Footer ()
{
    return (
        <footer>
                <p>
                    &copy; {new Date().getFullYear()} Universal. All rights reserved.
                </p>
                <p>
                    Follow us on:
                    <a href="#" className="text-blue-400"> Facebook</a>,
                    <a href="#" className="text-blue-400"> Twitter</a>,
                    <a href="#" className="text-blue-400"> Instagram</a>
                </p>
        </footer>
    );
}

export default Footer;