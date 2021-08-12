import clubs from './clubs.js';

class DataSource {

    static searchClub(keyword) {
        return new Promise((resolve, reject) => {

            const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

            if (filteredClubs.length) {
                resolve(filteredClubs);
            } else {
                reject(`Upps sorry, <span style="color:#cc0000;font-style:italic;font-weight:bold;">${keyword}</span> is not found`);
            }
        })
    };

}

export default DataSource;