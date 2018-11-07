## Functional Programming

### Onderzoeks vragen:

**1. Hoe vaak komen scheldwoorden voor in titels van boeken**

###### Deelvragen:

-   Is sinds de komst van het internet/social media de titels van boeken grover geworden?

**2. In hoeverre hebben historische gebeurtenissen impact op de dikte van boeken?**

###### Deelvragen:

-   welk jaar zijn de dikste boeken uitgekomen?
-   In welk jaar zijn de dunste boeken uitgekomen?
-   Welk genre bevat gemiddeld de meeste pagina's

Na het onderzoeken van de physical-description bleek de cm waarde de breedte van het boek te zijn. ik heb mn deel vraag dus aangepast. Ik ben nu bezig met schrijven van een functie waarmee ik het aantal pagina's uit de api kan halen. Dit staat vaak als "323 p" in de data. Op het moment loop ik tegen het schoonmaken van de data aan. Hiermee ben ik gisteren de hele dag bezig geweest. Met hulp van @timruiterkamp ben ik een stuk verder gekomen.

Ik krijg nu de data schoon terug door een regex expressie, thanks to Daniel.

Mijn code leek te werken maar ik vond het zelf lastig het begrip functional programming te doorgronden. Omdat ik hier meer over wilde weten ben ik het boek "Mastering Javascript Functional Programming" gaan lezen. Dit is beschikbaar via de O'reilly website. De code die in het boek wordt behandeld is vrij geavanceerd maar wordt goed en duidelijk uitgelegd. De uitleg over de map functie heeft mij veel geholpen. Ik heb mijn code wat functioneler gemaakt door boven in de code het object te maken en het object hierna door een opschoon functie te halen.

###### Visualisatie schets

Dit de eerste schets van mijn visualistie idee, ik wil een fysieke boekenplank maken met hierop de boeken per genre. de dikte van de boeken wordt afgeleid uit het aantal pagina's.

![visualsatie schets](.\img\IMG_20181102_124514.jpg)

**3. Hoe is het kleurgebruik op de kaft van boeken de afgelopen jaren veranderd?**

###### Deelvragen:

-   Hoe is het kleurgebruik van covers veranderd in de loop der jaren?
-   Hoe is het kleur per genre in de loop der jaren veranderd?
-   Welke kleur komt het meest voor in het genre Horror?

**4. In welke maand komen de meeste boeken uit?**

###### Deelvragen:

-   Komen in de zomermaanden meer romans uit?
-   Komen in de wintermaanden meer thrillers uit?
