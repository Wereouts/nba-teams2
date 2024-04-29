
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img className='github' src="/imagens/github.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/guilhermi.png/" target="_blank">
                        <img src="/imagens/instagram.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <p>
                Desenvolvido por Guilherme Costa
            </p>
        </section>
    </footer>)
}

export default Rodape