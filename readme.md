# BudżetLab Instrukcja

## Spis treści


1. [Wstęp](#wstep)
2. [Aktualności](#aktualnosci)
3. [Przygotowanie środowiska](#przygotowanie)
4. [Struktura projektu](#struktura)
5. [Polecenia lini komend](#polecenia)


## 1. Wstęp <a name="wstep"></a>

        Projekt BudżetLab poświęcony jest przygotowaniu narzędzia umożliwiającego eksplorację oraz wizualizację budżetu miasta Katowice. Projekt realizowany jest w ramach Shared Cities przez Miasto Ogrodów i Medialab Katowice.
## 2. Aktualności <a name="aktualnosci"></a>

### [2017-08-14] - Stworzenie repozytorium

## 3. Przygotowanie środowiska <a name="przygotowanie"></a>

Wymagane środowiska/narzędzia:

* [Node.js v. > 6](https://nodejs.org/en/download/)
* [Yarn](https://yarnpkg.com/en/docs/install)

Przed rozpoczęciem pracy wymagane zainstalowanie zależności komendą:
```shell
yarn
```
lub
```shell
yarn install
```

Uruchomienie serwera testowego:
```shell
yarn run dev-start
```
Domyślnie aplikacja zostanie uruchomiona lokalnie pod portem *3000*. Serwer automatycznie nasłuchuje zmiany w plikach źródłowych i za pomocą [Webpack'a](https://webpack.js.org/concepts/) budowane są paczki skryptów, które następnie automatycznie zostają dołączone do plików HTML. Zmiany widoczne są *"na żywo"* w przeglądarce.


## 4. Struktura projektu <a name="struktura"></a>
```
.
+-- client (część kliencka aplikacji)
|   +-- dst (zbudowane paczki skryptów oraz przetworzone pliki HTML)
|   +-- src (kod źródłowy części klienckiej)
|   |   +-- components (komponenty uporządkowane w foldery dla komponentu (style, skrypty itp.))
|   |   +-- helpers (metody pomocnicze)
|   |   +-- services (serwisy do połączenia z zasobami serwera)
|   |   +-- views (komponenty widoku)
|   |   +-- app.jsx (główny moduł aplikacji)
|   |   +-- index.html (strona startowa)
|   |   +-- index.jsx (plik startowy części klienckiej)
+-- server (część serwerowa aplikacji)
|   +-- ...
+-- index.js (plik startowy aplikacji)
+-- package.json (plik konfiguracyjny aplikacji)
+-- webpack.config.js (plik konfiguracyjny Webpack)
+-- webpack.deployment.config.js (plik konfiguracyjny Webpack dla publikacji)
```

## 5. Polecenia lini komend <a name="polecenia"></a>


#### Uruchomienie aplikacji
```shell
yarn run dev-start
```

#### Dodanie biblioteki do aplikacji
```shell
yarn add [nazwa-pakietu]
```
Przykład:
```shell
yarn add react
```
