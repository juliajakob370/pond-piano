import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="piano">
        <li><button class="lily">C</button></li>
        <li><button class="log">C#</button></li>
        <li><button class="lily">D</button></li>
        <li><button class="log">Eb</button></li>
        <li><button class="lily">E</button></li>
        <li><button class="lily">F</button></li>
        <li><button class="log">F#</button></li>
        <li><button class="lily">G</button></li>
        <li><button class="log">Ab</button></li>
        <li><button class="lily">A</button></li>
        <li><button class="log">Bb</button></li>
        <li><button class="lily">B</button></li>
        <li><button class="lily">C</button></li>
    </div>
`
