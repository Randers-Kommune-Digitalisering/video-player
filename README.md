
# video-player `README.md`
[**Formål**](#formål) | [**Brugsvejledning**](#brugsvejledning) 

## Formål

Formålet med video-player er at udstille en webbaseret videoafspiller samt opbevare videofiler til offentlig brug.

Videofiler opbevares i på stien [`./vue/public/videos`](https://github.com/Randers-Kommune-Digitalisering/video-player/tree/main/vue/public/videos), og udstilles med HTML5 videoafspiller på endpoint `/?video=<video-file-name>`.

## Brugsvejledning

### Tilføj ny video
For at tilføje en ny video til biblioteket:
1) Tilgå  [`./vue/public/videos`](https://github.com/Randers-Kommune-Digitalisering/video-player/tree/main/vue/public/videos) på main-branch af video-player repositoriet.

2) Tilføj din video ved at klikke `Add file` > `+ Upload files` direkte i mappen `videos`.

3. Gem dine ændringer, og vent nogle minutter på at ændringerne automatisk idriftsættes.

**OBS**: *Automatisk deployment af nye videoer sker kun til testmiljø (prototypes).*

### Se video i browser

Videofiler som findes i applikationen kan ses direkte i en webbrowser.

For at se en video:

1) Find videoens navn fra [`./vue/public/videos`](https://github.com/Randers-Kommune-Digitalisering/video-player/tree/main/vue/public/videos)-mappen.

2. Vælg miljø samt videoafspiller fra listen herunder, og erstat  `<video-file-name>` med videoens navn:

	 **Test**miljø (prototypes) med **HTML5 videoafspiller**:
 `https://video.prototypes.randers.dk/?video=<video-file-name>`
 
	 **Test**miljø (prototypes) med browserens **standard videoafspiller**:
 `https://video.prototypes.randers.dk/videos/<video-file-name>`
 
	 **Prod**uktionsmiljø (data) med **HTML5 videoafspiller**:
 `https://video.data.randers.dk/?video=<video-file-name>`
 
	 **Prod**uktionsmiljø  (data) med browserens **standard videoafspiller**:
 `https://video.data.randers.dk/videos/<video-file-name>`
