export default function Card(props) {
    console.log(props)
    return (
        <div class="skill-card">
            <h3>{props.titulo}</h3>
            <p>{props.nivel}</p>
        </div>
    );
}

