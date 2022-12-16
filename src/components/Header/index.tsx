import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
  return (
    <>
      <header>
        <div className='mol-logo-container'>
          <h1>Mol - TV Shows</h1>
          <p>
            Desenvolvido por <a href='https://www.instagram.com/daniel.hanks/'></a>Daniel Oliveira
          </p>
          <img src={logo} alt='mol' />
        </div>
      </header>
    </>
  )
}

export default Header
