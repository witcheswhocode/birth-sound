# Birth Sound
### The overlap between music theory and astrology.

### Description

***This project is still a work in progress.***

### Preview
![Birthchart](https://raw.github.com/witcheswhocode/birthsound/main/readme/chart.png)

![List](/readme/list.png "List of planets and signs")

![Form](/readme/form.png "Interface of form")



### To Run:

If you have Docker installed, in this the project directory, you can run:

#### `docker-compose -f docker-compose-develop.yml build`
#### `docker-compose docker-compose-develop.yml up`
Go to Open [http://astrology.localhost:3050/](http://astrology.localhost:3050/) to view it in your browser.


If you do not have Docker installed or it's not working, you can run the `client` and `server` separately by:

Run client, in terminal:
#### `cd client`
#### `npm run start`
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Run server, in terminal:
#### `cd server`
#### `npm start`
[http://localhost:3001](http://localhost:3001).
