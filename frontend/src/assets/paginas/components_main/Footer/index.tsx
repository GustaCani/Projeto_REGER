import './styles.css'

function Footer() {
    return (
        <footer className='footer1'>
            <div>
                <a href='#/creditos'> Desenvolvido por </a>
                <img className='face' width="30px" height="30px" />
            </div>

            <div className="footer-menu">
         <ul className="f-menu">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Blog</a></li>
        </ul>
</div>


        </footer>


    )
}

export default Footer