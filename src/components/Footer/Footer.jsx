import logo from "../../assets/logos/logo-blanco.png";
import email from "../../assets/iconos/icon-email.png";
import linkedIn from "../../assets/iconos/icon-linkedin.png";
import github from "../../assets/iconos/icon-github.png"

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 text-base-content">
            <div>
                <img src={logo} className="h-10 filterBaseContent" alt="Logo de Lacroix Patissier" />
                <p className="font-bold">
                Providing coffe since 1992
                <br />
                Diseño y desarrollo por Carlos Diego Simon Hurtado.
                </p> 
                <p>Copyright © 2022 - All right reserved</p>
            </div> 
            <div>
                <div className="grid grid-flow-col gap-4">
                <a href="https://www.linkedin.com/in/simon-carlos/"> <img src={linkedIn} className="filterBaseContent h-8" alt="Logo de LinkedIn" /> </a> 
                <a href="https://github.com/diegosimonnn"> <img src={github} className="filterBaseContent h-8" alt="Logo de GitHub" /> </a> 
                <a href="mailto:csimonhurtado@gmail.com"> <img src={email} className="filterBaseContent h-8" alt="Logo de Email" /> </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;