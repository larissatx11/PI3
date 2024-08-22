import { Home } from './home/home';
import './content.css';
import { Rotas } from './rotas/rotas';
import { Onibus } from './onibus/onibus';
import { Perfil } from './perfil/perfil';
import { AddOnibus } from './onibus/adicionar-onibus/addOnibus';

function Content(props: { escolha: number, userId: number | null }) {
    switch (props.escolha) {
        case 0:
            return (
                <div className="container">
                    <Home />
                </div>
            )
        case 1:
            return (
                <div className="container">
                    <Rotas />
                </div>
            )
        case 2:
            return (
                <div className="container">
                    <Onibus />
                </div>
            )
        case 3:
            return (
                <div className="container">
                    <Perfil />
                </div>
            )
        case 4:
            console.log("Content received userId:", props.userId);
            return (
                <div className="container">
                    <AddOnibus userId={props.userId} />
                </div>
            )
        default:
            break;
    }

}

export default Content;
