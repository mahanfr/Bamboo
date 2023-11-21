import '../styles/style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
    <nav>
        <div class="flex flex-row bg-gray-700 w-full px-5 py-1">
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
        </div>
    </nav>
      <section class="flex flex-row">
        <div class="flex flex-col h-screen w-1/5 bg-gray-600">
            <p>New Note</p> 
        </div>
        <section>
          <button id="counter" type="button"></button>
        </section>
      </section>
`

setupCounter(document.querySelector('#counter'))
