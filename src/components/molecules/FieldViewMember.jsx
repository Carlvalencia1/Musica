import Title from "../atoms/Title";
function FieldViewMember(props) {
    return (<>
        <div style={{width:"80%"}}>
            <Title title={props.title}></Title>
        </div>
    </> );
}

export default FieldViewMember;