import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Principal from './componentes/Principal';
import Inicio from './componentes/Inicio';
import Registro from './componentes/Registro';
import Cursos from './componentes/Cursos';
import Detallecurso from './componentes/Detallecurso';
import Miscursos from './componentes/Miscursos';
import Perfil from './componentes/Perfil';
import CursoC from './cursos/CursoC';
import CursoHtml from './cursos/CursoHtml';
import CursoCss from './cursos/CursoCss';
import CursoPython from './cursos/CursoPython';
import CursoPhpMysql from './cursos/CursoPhpMysql';
import CursoJavascript from './cursos/CursoJavascript';
import ProtectedRoute from './componentes/ProtectedRoute';

function App() {
  return (
    <div className="App">
        
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/principal" element={<ProtectedRoute element={Principal} />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/cursos" element={<ProtectedRoute element={Cursos} />} />
            <Route path="/detallecurso" element={<ProtectedRoute element={Detallecurso} />} />
            <Route path="/miscursos" element={<ProtectedRoute element={Miscursos} />} />
            <Route path="/perfil" element={<ProtectedRoute element={Perfil} />} />
            <Route path="/curso/c" element={<ProtectedRoute element={CursoC} />} />
            <Route path="/curso/html" element={<ProtectedRoute element={CursoHtml} />} />
            <Route path="/curso/css" element={<ProtectedRoute element={CursoCss} />} />
            <Route path="/curso/python" element={<ProtectedRoute element={CursoPython} />} />
            <Route path="/curso/phpmysql" element={<ProtectedRoute element={CursoPhpMysql} />} />
            <Route path="/curso/javascript" element={<ProtectedRoute element={CursoJavascript} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        
    </div>
  );
}

export default App;
