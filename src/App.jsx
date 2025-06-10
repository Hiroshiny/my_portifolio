import './App.css'

function App() {
  return (
    <>
      {/* Cabeçalho com foto de perfil */}
      <header className="header">
        <div className="profile-container">
          {/* Substitua 'profile.jpg' pelo caminho da sua imagem */}
          <img src="./assets/c:\Users\GUILHERMEHENRIQUECOS\Pictures\Imagem do WhatsApp de 2025-06-10 à(s) 18.05.46_1597b21e.jpg" alt="Foto de perfil" className="profile-image" />
          <h1>Guilherme Henrique</h1>
          <p>Estudante de Desenvolvimento de Sistemas</p>
        </div>
      </header>

      {/* Seção Sobre Mim */}
      <section className="about-me">
        <h2>Sobre Mim</h2>
        <p>
          Olá! Meu nome é Guilherme Henrique e sou estudante do curso de Desenvolvimento de Sistemas. 
          Já possuo o certificado de Auxiliar Técnico e tenho experiência com Python, JavaScript e HTML, 
          além de outras tecnologias interligadas.
        </p>
        <p>
          Estou construindo este portfólio para compartilhar meus projetos, conquistas e meu progresso na área de tecnologia.
        </p>
      </section>

      {/* Seção Projetos */}
      <section className="projects">
        <h2>Meus Projetos</h2>
        <ul>
          <li>Projeto 1: Sistema de Gerenciamento de Tarefas</li>
          <li>Projeto 2: Site de Portfólio Responsivo</li>
          <li>Projeto 3: Aplicação Web com React e API</li>
        </ul>
      </section>

      {/* Seção Conquistas */}
      <section className="achievements">
        <h2>Minhas Conquistas</h2>
        <div className="achievement-gallery">
          {/* Substitua 'certificado1.jpg' e 'certificado2.jpg' pelos caminhos das suas imagens */}
          <img src="./assets/certificado1.jpg" alt="Certificado de Auxiliar Técnico" className="achievement-image" />
          <img src="./assets/certificado2.jpg" alt="Outro Certificado" className="achievement-image" />
        </div>
      </section>

      {/* Seção Contato */}
      <section className="contact">
        <h2>Contato</h2>
        <p>Email: guilhermehenrique@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/guilhermehenrique" target="_blank">linkedin.com/in/guilhermehenrique</a></p>
        <p>GitHub: <a href="https://github.com/guilhermehenrique" target="_blank">github.com/guilhermehenrique</a></p>
      </section>
    </>
  )
}

export default App