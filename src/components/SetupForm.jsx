import '../reusableStyles.css';
import { useState, useEffect } from 'react';
import NumberInput from './NumberInput';
import ExistingProjects from './ExistingProjects';

export function SetupForm(props) {
    const { createProject, setLoadedImage } = props;

    const [projectNameInput, setProjectNameInput] = useState('');
    const [widthInput, setWidthInput] = useState(32);
    const [heightInput, setHeightInput] = useState(32);
    const [pixelSizeInput, setPixelSizeInput] = useState(16);
    const [projects, setProjects] = useState([]);
    const [btnDisabled, setBtnDisabled] = useState(true);

    useEffect(() => { // get existing projects from localstorage
        const existingProjects = [];
        Object.keys(localStorage).forEach(key => {
            if (key.includes('pixasketch')) {
                existingProjects.push(JSON.parse(localStorage[key]));
            }
        })
        setProjects(existingProjects);
    }, []);

    useEffect(() => {
        if (projectNameInput && widthInput <= 48 && heightInput <= 48 && pixelSizeInput <= 32) {
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    }, [projectNameInput, widthInput, heightInput, pixelSizeInput])

    const validateForm = () => {
        if (!btnDisabled) {
            createProject(widthInput, heightInput, pixelSizeInput, projectNameInput);
        }
    }

    return (
        <>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div>
                <label for='projectNameInput' style={{display: 'block'}}>Project Name</label>
                <input className='textInput' type='text' id='projectNameInput' style={{width: '30rem'}} 
                    onChange={(e) => setProjectNameInput(e.target.value)} />
            </div>
            <div style={{padding: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width:'50%'}}>
                <NumberInput label={'Width(px)'} value={widthInput} updateValue={setWidthInput} max={48} min={4} />
                <NumberInput label={'Height(px)'} value={heightInput} updateValue={setHeightInput} max={48} min={4} />
            </div>
            <div style={{padding: '10px'}}>
                <NumberInput label={'Pixel Size'} value={pixelSizeInput} updateValue={setPixelSizeInput} max={24} min={4} />
            </div>
            <br />
            <button className='mainBtn' type='button' disabled={btnDisabled}
                onClick={() => validateForm()}>
                Create New Project
            </button>
            <p>Note: This site currently supports desktop only</p>
        </div>
        {projects.length > 0 && <ExistingProjects projects={projects} createProject={createProject} setLoadedImage={setLoadedImage} />}
        </>
    )
}

export default SetupForm;
