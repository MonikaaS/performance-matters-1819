# Opdrachten Week 2

Minor Web Development - Performance Matters

![afbeelding](<performance-matters-ss/Screenshot 2019-03-22 at 10.47.55.png>)

## instaleren:

```
git clone: https://github.com/MonikaaS/performance-matters-1819.git
cd web-app-from-scratch-18-19
npm install
```

## Hoe mijn app was:

![afbeelding](<performance-matters-ss/basis/Screenshot 2019-03-21 at 14.54.40.png>)

![afbeelding](<performance-matters-ss/basis/Screenshot 2019-03-21 at 14.54.54.png>)

**En heel vervelend ik kwam er achter dat ik een type fout had in de link naar mijn jquery bestand, dus heb ik die nog even los gescreenshot...**

![afbeelding](<performance-matters-ss/minified+preload/Screenshot 2019-03-26 at 15.06.58.png>)
![afbeelding](<performance-matters-ss/minified+preload/Screenshot 2019-03-26 at 15.09.31.png>)

[De rest van de screenshots](https://github.com/MonikaaS/performance-matters-1819/tree/master/performance-matters-ss/basis)

### Compression

Ik ben als eerste begonnen met gzip, zodat bepaalde files kleiner worden in size.
Dit zijn de verbeteringen:

![styling](<performance-matters-ss/gzip-compression/Screenshot 2019-03-21 at 15.09.33.png>)
![styling](<performance-matters-ss/gzip-compression/Screenshot 2019-03-21 at 15.10.28.png>)
![styling](<performance-matters-ss/gzip-compression/Screenshot 2019-03-21 at 15.11.03.png>)
![styling](<performance-matters-ss/gzip-compression/Screenshot 2019-03-21 at 15.13.06.png>)

### Critical css

daarna ben ik met [een critical css generator](https://jonassebastianohlsson.com/criticalpathcssgenerator/), de critical css gaan genereren. Zodat wanneer de pagina ingeladen wordt, de gebruiker iets te zien krijgt ipv een lege witte pagina.

![styling](<performance-matters-ss/critical-css/Screenshot 2019-03-29 at 07.00.30.png>)
![styling](<performance-matters-ss/critical-css/Screenshot 2019-03-29 at 07.00.57.png>)

### Minification

Daarna ben ik met grunt mijn 2 css bestanden met elkaar gaan samen voegen. Daarna ben ik mijn js en css gaan minifyen, zodat de file size kleiner wordt.

![styling](<performance-matters-ss/minify/Screenshot 2019-03-29 at 07.16.21.png>)
![styling](<performance-matters-ss/minify/Screenshot 2019-03-29 at 07.16.34.png>)

### Fonts

Ik ben dit gaan aanpassen, omdat het als gebruiker belangrijk is om iets te zien te krijgen, wanneer de pagina aan het laden is.

Ik heb dit gedaan door eerst mijn fonts te optimaliseren met: [font-display](https://css-tricks.com/google-fonts-and-font-display/)

Daarna ben ik de fonts gaan preloaden. Je ziet de waterval eerst de css inladen en dan pas de fonts.

**fonts**:
![fonts](<performance-matters-ss/fonts/Screenshot 2019-03-29 at 07.23.18.png>)
![fonts](<performance-matters-ss/fonts/Screenshot 2019-03-29 at 07.24.13.png>)

Nu zie je dat de fonts eerst ingeladen worden, maar tegelijk met de rest.

### Images

Wat je nu ziet is dat de afbeelding groot is. Hij is namelijk 5000 pixels breed. Ik ben als eerste met de hand de afbeelding gaan verkleinen, naar 400 pixel breedte. Daarna ben ik ook nog een webp fallback gaan maken, zodat de afbeelding sneller ingeladen wordt.

Ik had ook nog een fallback kunnen generen, met meerdere afbeelding size en de browser laten kiezen welke het paste past.

![images](<performance-matters-ss/images/Screenshot 2019-03-29 at 07.29.26.png>)
![images](<performance-matters-ss/images/Screenshot 2019-03-29 at 07.29.35.png>)
![images](<performance-matters-ss/images/Screenshot 2019-03-29 at 07.34.55.png>)

### Service worker

Als laatste ben ik de service worker gaan toepassen. Ik heb deze bestanden gechached, zodat het maar 1x geinstalleerd hoeft te worden en de laad tijden minder lang duren:

```'/',
   '/css/main.min.css',
   '/js/jquery-3.3.1.min.js',
   '/offline.html',
   '../fonts/Germania_One/GermaniaOne-Regular.ttf',
   '../fonts/Raleway/Raleway-Light.ttf'``

Daarna ben ik een offline html pagina gaan tonen, wanneer je site offline staat.

![service-worker](<performance-matters-ss/service-workers/Screenshot 2019-03-29 at 07.34.55.png>)
![service-worker](<performance-matters-ss/service-workers/Screenshot 2019-03-29 at 07.43.44.png>)
![service-worker](<performance-matters-ss/service-workers/Screenshot 2019-03-29 at 07.44.28.png>)
```
