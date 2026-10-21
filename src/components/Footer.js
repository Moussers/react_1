import './Footer.css'

function  Footer() 
{
    return (
        <footer>
            <h2>
                Copyright &#0169; {new Date().getFullYear()}
            </h2>
        </footer>
    );
}
// &#0169; - значок копирайт (c в кружочке)
export default Footer;