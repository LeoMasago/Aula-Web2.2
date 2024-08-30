import Card from "../Card";

function Skills({ skills }) {
  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <Card titulo="React" nivel="Lutando..."/> 
      <Card titulo="HTML" nivel="Avançado"/>
      <Card/>
    </div>
  );
}

export default Skills;