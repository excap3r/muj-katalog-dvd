<<<<<<< HEAD
📀 Můj katalog DVD
==================

Projekt "Můj katalog DVD" vznikl pro mého dědu, který stále používá DVD filmy uložené ve složkách. Cílem tohoto projektu je usnadnit a zrychlit hledání filmů v jeho sbírce bez nutnosti manuálně procházet každou složku. Tato webová aplikace je napsaná v Reactu a využívá Bootstrap 5 pro stylování a fuse.js pro pokročilé vyhledávání s tolerancí na překlepy.

🛠️ Instalace
-------------

1.  Klonujte tento repozitář:

bash

```bash
git clone https://github.com/vaserepo/muj-katalog-dvd.git
```

2.  Nainstalujte závislosti:

`npm install`

3.  Spusťte aplikaci:

sql

```sql
npm start
```

🏗️ Build
---------

Pro vytvoření produkční verze aplikace spusťte následující příkaz:

arduino

```arduino
npm run build
```

Výstupem je složka `build` obsahující optimalizované soubory pro nasazení na server.

🚀 Nasazení na server
---------------------

Pro nasazení aplikace na server jednoduše nahrajte obsah složky `build` na váš webový server. Aplikace je statická, takže žádné speciální nastavení serveru není potřeba. Pouze se ujistěte, že váš server je konfigurován tak, aby všechny URL přesměroval na soubor `index.html`.

📚 Struktura projektu
---------------------

*   `src/components/MovieList.js`: Komponenta zobrazující seznam filmů
*   `src/components/SearchBar.js`: Komponenta vyhledávání filmů
*   `src/App.js`: Hlavní komponenta aplikace, která obsahuje logiku vyhledávání a zpracování dat
*   `src/dvds.json`: JSON soubor obsahující všechny filmy a jejich metadata

🎞️ Přidání dalších filmů do katalogu
-------------------------------------

Přidejte nové filmy do souboru `src/dvds.json` podle následující šablony:

json

```json
{
  "folders": [
    {
      "id": 1,
      "name": "Název složky",
      "pages": [
        [
          "Název filmu 1",
          "Název filmu 2"
        ],
        [
          "Název filmu 3",
          "Název filmu 4"
        ]
      ]
    }
  ]
}
```

📝 Licence
----------

Tento projekt je dostupný pod MIT licencí.
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 759429e (Initialize project using Create React App)
