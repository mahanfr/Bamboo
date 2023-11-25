import '../styles/style.css'
import { setupCounter } from './counter.js'
import { setupEditor } from './editor.js'

document.querySelector('#app').innerHTML = `
    <nav class="flex flex-row bg-gray-700 w-full h-[70px] px-5 py-1">
        <div class="flex flex-col space-y-2">
            <h3 class="text-xl">New Note</h3>
            <div class="flex flex-row space-x-3 text-gray-200">
                <a href="#">File</a>
                <a href="#">Edit</a>
                <a href="#">View</a>
                <a href="#">Format</a>
                <a href="#">Templates</a>
                <a href="#">Extentions</a>
                <a href="#">Help</a>
            </div>
        </div>
        <div class=""></div>
    </nav>
    <section style="height: calc(100vh - 71px);" class="flex flex-row grow">
         <div class="flex flex-col w-1/5 bg-gray-600">
             <p>New Note</p> 
         </div>
        <div class="grow" id="editor"></div>
    </section>
`
setupEditor(document.getElementById("editor"))
