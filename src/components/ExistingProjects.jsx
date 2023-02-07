import '../reusableStyles.css';

export function ExistingProjects(props) {
    const { projects, createProject, setLoadedImage } = props;

    const loadProject = (projectName) => {
        const loadedProject = JSON.parse(localStorage.getItem(projectName));
        setLoadedImage(loadedProject.image);
        createProject(loadedProject.width, loadedProject.height, loadedProject.pixelSize, loadedProject.name);
    }

    const styles = {
        wrapper: {
            border: '1pt solid black',
            borderRadius: '8px',
            margin: '20px 10%'
        },
        container: {
            display: 'flex',
            flexDirction: 'row',
            justifyContent: 'space-around',
            padding: '20px'
        }
    }

    return (
        <div style={styles.wrapper}>
            <h2>Load Project</h2>
            <div style={styles.container}>
                {projects.map((project) => 
                    <button className='existingProjectButton' value={`pixasketch_${project.name}`}
                    onClick={(e) => loadProject(e.target.value)}>{project.name} - {project.date}</button>
                )}
            </div>
        </div>
    )
}

export default ExistingProjects;
