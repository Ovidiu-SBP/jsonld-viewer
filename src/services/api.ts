class GithubAPI {
    private _baseLink: string = 'https://standards-ontotest.oftrust.net';

    getData = async (path: string) => {
        const url = `${this._baseLink}${path}`;
        const res = await fetch(url, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) {
            return res.status
        }

        return await res.json();
    }

    getVocabulary = async (path: string) => {
        const url = `${this._baseLink}${path}`;

        const res = await fetch(url, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!res.ok) {
            return res.status
        }

        return await res.json();
    }
}

export default new GithubAPI();