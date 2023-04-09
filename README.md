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
