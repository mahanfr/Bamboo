import "../styles/editor.css"

export function setupEditor(element) {
    let text = "Lets get started!"
    document.getElementById(element.id).innerHTML = `
        <textarea class="text-editor">${text}</textarea>
    `
}
