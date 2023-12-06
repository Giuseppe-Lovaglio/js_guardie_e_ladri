# Esercizio 2x06 JavaScript – Guardie e ladri
#### Traccia
Dati i file html e css allegati, realizzare il file guardie_e_ladri.js affinché il div rappresentante
la guardia (G) possa muoversi mediante i button predisposti cercando di catturare il div
rappresentante il ladro (L) che è mosso dal computer, secondo le seguenti regole:
* ogni button sposta la guardia di 50px nella direzione prescelta;
* per ogni mossa della guardia, il ladro si sposta di 50px in una direzione a caso;
* i bordi e gli angoli della stanza non sono valicabili (né vale l'effetto Pacman), cioè
guardia e ladro devono restare nella stanza;
* la guardia ha a disposizione 20 mosse per catturare il ladro cercando di finire sulle
sue stesse coordinate;
* la situazione corrente va mostrata e aggiornata dopo ogni mossa nel div "esito" sotto
forma di mosse restanti ovvero se guardia o ladro hanno vinto;
* vince il giocatore se la guardia cattura il ladro entro 20 mosse, vince computer se il
ladro resta libero dopo 20 mosse;
* a gioco terminato i button dovranno essere automaticamente disabilitati