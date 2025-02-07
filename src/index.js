import { createRoot } from "react-dom/client";
import NavBar from './components/navbar'
import './index.css'
import Mapper from './components/mapper'

const root=createRoot(document.getElementById('root'))
root.render(
    <div>
    <NavBar/>
    <Mapper/>
    </div>
)