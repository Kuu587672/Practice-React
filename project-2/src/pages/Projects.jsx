function Projects() {
    const projectList = [
        { name: 'Hustle Lab', desc: 'A creative startup website built with WordPress.' },
        { name: 'MechKeys', desc: 'A keyboard e-commerce landing page built with React.' }
    ];
    return (
        <div style={{ padding: '20px' }}>
            <h1>My Projects</h1>
            {/* p = Projects, i = Keys/Index */}
            {projectList.map((p, i) => (
                <div key={i} style={{ marginTop: '10px' }}>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default Projects;