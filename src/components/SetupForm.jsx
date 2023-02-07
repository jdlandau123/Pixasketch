import '../reusableStyles.css';
import { useState, useEffect } from 'react';
import ExistingProjects from './ExistingProjects';

export function SetupForm(props) {
    const { createProject, setLoadedImage } = props;

    const [projectNameInput, setProjectNameInput] = useState('');
    const [widthInput, setWidthInput] = useState(32);
    const [heightInput, setHeightInput] = useState(32);
    const [pixelSizeInput, setPixelSizeInput] = useState(16);
    const [projects, setProjects] = useState([]);

    useEffect(() => { // get existing projects from localstorage
        const existingProjects = [];
        Object.keys(localStorage).forEach(key => {
            if (key.includes('pixasketch')) {
                existingProjects.push(JSON.parse(localStorage[key]));
            }
        })
        setProjects(existingProjects);
    }, []);

    return (
        <>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div>
                <label for='projectNameInput' style={{display: 'block'}}>Project Name</label>
                <input className='textInput' type='text' id='projectNameInput' style={{width: '30rem'}} 
                    onChange={(e) => setProjectNameInput(e.target.value)} />
            </div>
            <div style={{padding: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width:'50%'}}>
                <label for='projectWidthInput'>Width(px)</label>
                <input className='textInput' type='text' id='projectWidthInput' style={{margin: '0 10px', width: '50%'}}
                    defaultValue='32' onChange={(e) => setWidthInput(e.target.value)} />
                <label for='projectHeightInput'>Height(px)</label>
                <input className='textInput' type='text' id='projectHeightInput' style={{margin: '0 10px', width: '50%'}}
                    defaultValue='32' onChange={(e) => setHeightInput(e.target.value)} />
            </div>
            <div style={{padding: '10px'}}>
                <label for='pixelSizeInput'>Pixel Size</label>
                <input className='textInput' type='text' id='pixelSizeInput' style={{margin: '0 10px', width: '25%'}}
                    defaultValue='16' onChange={(e) => setPixelSizeInput(e.target.value)} />
            </div>
            <br />
            <button className='mainBtn' type='button'
                onClick={() => createProject(widthInput, heightInput, pixelSizeInput, projectNameInput)}>
                Create New Project
            </button>
        </div>
        {projects.length > 0 && <ExistingProjects projects={projects} createProject={createProject} setLoadedImage={setLoadedImage} />}
        </>
    )
}

export default SetupForm;
