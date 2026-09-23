import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="header-container">
      <div className="header-info">
        <p className="docente-info">Profa Mestre Sirley Ambrosia Vitorio Addão</p>
        <h1 className="aluno-info">Desenvolvido por: Enzo Belizardo</h1>
      </div>
      <nav className="header-nav">
        <Link to="/">Início</Link>
        <Link to="/chamados">Gerenciamento</Link>
        <Link to="/chamados/listar">Listar Chamados</Link>
        <Link to="/chamados/cadastrar">Novo Chamado</Link>
      </nav>
    </header>
  );
}
