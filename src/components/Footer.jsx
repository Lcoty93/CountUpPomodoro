function Footer(){
    const today = new Date();
    const currentYear = today.getFullYear();
    
    return(
        <footer>
            <p>
                © {currentYear} Luke Coty | Built with React
            </p>
        </footer>
    )
}

export default Footer;