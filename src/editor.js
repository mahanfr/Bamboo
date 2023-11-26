import "../styles/editor.css"
import "../styles/fontawesome/css/all.min.css"

export function setupEditor(element) {
    let text = `This my first note!`;
    document.getElementById(element.id).innerHTML = `
        <div class="p-3 flex space-x-10">
            <div class="flex space-x-3">
                <i class="fa-solid fa-b"></i>
                <i class="fa-solid fa-italic"></i>
                <i class="fa-solid fa-heading"></i>
                <i class="fa-solid fa-link"></i>
                <i class="fa-solid fa-code"></i>
                <i class="fa-solid fa-square-root-variable"></i>
                <i class="fa-solid fa-image"></i>
            </div>
            <div class="flex space-x-3">
                <i class="fa-solid fa-align-left"></i>
                <i class="fa-solid fa-align-center"></i>
                <i class="fa-solid fa-align-right"></i>
            </div>
            <div class="flex space-x-3">
                <i class="fa-solid fa-list-ul"></i>
                <i class="fa-solid fa-list-ol"></i>
                <i class="fa-solid fa-list-check"></i>
            </div>
        </div>
        <div class="text-editor" placeholder="click to start noting..." contenteditable>${text}</div>
    `
}
