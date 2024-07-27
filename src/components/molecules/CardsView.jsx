import Label from "../atoms/Label";
import Div from "../atoms/Card";

function CardsView(props) {
    return ( <>
        <Div key={props.key}>
        <Label text={`Email: ${props.email}`} />
        <Label text={`Usuario: ${props.user}`} />
        <Label text={`Contraseña: ${props.password}`} />
        </Div>
    </> );
}

export default CardsView;


