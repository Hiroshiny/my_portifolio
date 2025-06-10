import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

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

      {/* Seção Foto de Perfil */}
      <section className="profile-photo">
        <h2>Minha Foto</h2>
        {/* Substitua 'profile.jpg' pelo caminho da sua imagem */}
        <img src="./assets/profile.jpg" alt="Foto de perfil" className="profile-image" />
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
    </>
  )
}

export default App