# Simple Multilingual Website

This project demonstrates how to create a simple, dynamic multilingual website using vanilla JavaScript, HTML, and CSS. It allows users to switch between different languages without reloading the page. The text for each language is stored in a separate `translations.json` file, making the content easy to manage and scale.

---
## ✨ Key Features

* **Dynamic Content**: Page content is updated instantly using JavaScript.
* **No Page Reload**: Provides a seamless user experience when switching languages.
* **Scalable**: Adding new languages is simple and does not require changes to the core JavaScript logic.
* **Separation of Concerns**: The project is organized into four distinct files:
    * `index.html`: The main structure of the website.
    * `style.css`: All styling rules.
    * `script.js`: The logic for language switching.
    * `translations.json`: Contains all translated text.
* **Persistence**: The user's selected language is saved in the browser's `localStorage`, so their preference is remembered on their next visit.

---
## 📁 File Structure
/
|-- index.html
|-- style.css
|-- script.js
|-- translations.json
   * **`index.html`**: This file contains the basic HTML structure. Elements that need to be translated have a `data-lang-key` attribute, which is used by the JavaScript to identify them.
   * **`style.css`**: This file contains the styling for the page, including the "active" state for the currently selected language button.
   * **`script.js`**: This file contains all the logic. It fetches the translations from `translations.json`, finds all elements with a `data-lang-key`, and updates their content based on the selected language.
   * **`translations.json`**: A simple JSON file that holds the key-value pairs for all the text in each supported language.

---
## 🛠️ How to Use

1.  **Download Files**: Place all four files (`index.html`, `style.css`, `script.js`, `translations.json`) in the same folder.
2.  **Run a Server**: Because this project uses the `fetch()` API to load the `translations.json` file, you need to run it from a web server to avoid CORS (Cross-Origin Resource Sharing) errors. You cannot simply open the `index.html` file in your browser from your local file system (e.g., `file:///...`).
    * If you have a code editor like VS Code, you can use a live server extension (like "Live Server") to easily run it.
    * If you have Python installed, you can navigate to the project folder in your terminal and run `python -m http.server`.

---
## 🚀 How to Add a New Language

Adding a new language is straightforward:

1.  **Add a Button in `index.html`**:
    Add a new button for your language. Make sure the `id` follows the `btn-xx` format, where `xx` is the two-letter language code.

    ```html
    <!-- Example for adding Japanese -->
    <button id="btn-ja" class="lang-btn">日本語</button>
    ```

2.  **Add Translations in `translations.json`**:
    Add a new entry in the `translations.json` file with the corresponding language code as the key. Copy the structure from another language and replace the text with your new translations.

    ```json
    {
        "en": { "...": "..." },
        "es": { "...": "..." },
        "ja": {
            "page_title": "私たちのウェブサイトへようこそ！",
            "title": "私たちのウェブサイトへようこそ！",
            "intro": "これは動的な多言語ページの例です。上のボタンをクリックして、リロードせずに言語を切り替えます。",
            "section_title": "この方法について",
            "section_content": "JavaScriptを使用してJSONファイルを取得し、ページを翻訳します。これは効率的で、整理されており、保守が容易です。"
        }
    }
    ```

The `script.js` file will automatically handle the new button and its translations. No other changes are needed.
