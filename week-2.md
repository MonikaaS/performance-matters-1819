# Opdrachten Week 2

Minor Web Development - Performance Matters

![afbeelding](<performance-matters-ss/Screenshot 2019-03-22 at 10.47.55.png>)

## Hoe mijn app was:

![afbeelding](<performance-matters-ss/basis/Screenshot 2019-03-21 at 14.54.40.png>)

![afbeelding](<performance-matters-ss/basis/Screenshot 2019-03-21 at 14.54.54.png>)

[De rest van de screenshots](https://github.com/MonikaaS/performance-matters-1819/tree/master/performance-matters-ss/basis)

## Opdrachten

1. [Optimaliseer de first meaningful paint][opdracht1]
2. [Optimaliseer de Time to first byte][opdracht2]

### Opdracht 1: Optimaliseer de first meaningful paint

Ik ben dit gaan aanpassen, omdat het als gebruiker belangrijk is om iets te zien te krijgen, wanneer de pagina aan het laden is.

Ik heb dit gedaan door eerst mijn fonts te optimaliseren met: [font-display](https://css-tricks.com/google-fonts-and-font-display/)

**fonts**:
![fonts](<performance-matters-ss/fonts/Screenshot 2019-03-21 at 16.44.05.png>)
![fonts](<performance-matters-ss/fonts/Screenshot 2019-03-21 at 16.45.09.png>)
![fonts](<performance-matters-ss/fonts/Screenshot 2019-03-21 at 16.49.43.png>)

daarna ben ik met inline styling de belangrijkste styling gaan aanroepen.

![styling](<performance-matters-ss/first-meaningfull-paint/Screenshot 2019-03-22 at 10.24.27.png>)

#### Resources

### Opdracht 2: Optimaliseer de time to first byte

Om de pagina sneller te laten laden, wilde ik de times to first byte gaan optimaliseren.

Ik ben als eerste begonnen met gzip, zodat bepaalde files gecompressed worden.
Dit zijn de verbeteringen:

![styling](<performance-matters-ss/gzip-compression/Screenshot 2019-03-21 at 15.09.33.png>)
![styling](<performance-matters-ss/gzip-compression/Screenshot 2019-03-21 at 15.10.28.png>)
![styling](<performance-matters-ss/gzip-compression/Screenshot 2019-03-21 at 15.11.03.png>)
![styling](<performance-matters-ss/gzip-compression/Screenshot 2019-03-21 at 15.13.06.png>)

maar ik merkte dat dat niet echt wat deed er voor... de bestanden werden wel kleiner, maar het werd niet sneller binnengehaald.

Daarna wilde ik graag met minify mijn bestanden gaan minify'en en in een dist folder stoppen. Zodat mijn server daarop draait. Maar ik heb het geprobeerd, maar het lukte me niet. Ik weet niet zo goed waar ik moet beginnen.

#### Resources

<!-- Bindings -->

[opdracht1]: https://github.com/cmda-minor-web/performance-matters-1819/blob/master/week-2.md#opdracht-1-optimaliseer-de-first-meaningful-paint
[opdracht2]: https://github.com/cmda-minor-web/performance-matters-1819/blob/master/week-2.md#opdracht-2-optimaliseer-de-perceived-performance
