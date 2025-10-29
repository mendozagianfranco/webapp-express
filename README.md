# Web App Express

## Descrizione
Questa repository contiene un’applicazione **Express** collegata a un database MySQL, sviluppata per gestire film e relative recensioni.  
Il front-end React collegato a questa API è disponibile qui: [Web App React](https://github.com/mendozagianfranco/webapp-react)

---

## Step principali
1. Creare un database MySQL importando lo script db.sql presente nella root del progetto.
2. Configurare le variabili d’ambiente (.env) con i dati di connessione al database (host, user, password, database).
3. Avviare l’applicazione Express e verificare che la connessione al database funzioni correttamente.
4. Preparare una rotta index per ottenere la lista dei film.
5. Preparare una rotta show per ottenere i dettagli di un singolo film e le sue recensioni.

---

## Bonus
- Inserire immagini nel progetto Express e nel database.
- Gestire i dati di connessione al database tramite variabili d’ambiente.
- Strutturare il progetto con **controller** per le logiche delle API.
- Organizzare le rotte tramite un **router** dedicato.
- Implementare un **middleware** per le rotte inesistenti.
- Implementare un **middleware** per la gestione degli errori.

---

## Bonus avanzato
- Restituire nella rotta **index** anche la media delle recensioni dei film.

## Installazione

1. Clonare la repository:
```bash
git clone https://github.com/mendozagianfranco/webapp-express.git
```
2. Entrare nella cartella del progetto:
```bash
cd webapp-express
```
3. Installare le dipendenze:

```bash
npm install
```
4. Avviare il progetto:
```bash
npm run dev
```
