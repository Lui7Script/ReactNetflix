
const API_KEY = '86876d8ebdd773b441b957105dd416f3';
const API_BASE = 'https://api.themoviedb.org/3/';


const basicFetch = async (endpoint) => {

    const req = await fetch('${API_BASE} ${endpoint}');
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originais',
                title: 'Originais do Netflix',
                items: await basicFetch('/discover/tv?with_network=213&languege=pt-BR&api_key=' + API_KEY)
            },

            {
                slug: 'trending',
                title: 'Recomendado para você',
                items: await basicFetch('/trending/all/week?language=pt-BR&api_key=' + API_KEY)
            },

            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch('/movie/top_rated?language=pt-BR&api_key=' + API_KEY)
            },

            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch('/movie/top_rated?language=pt-BR&api_key=' + API_KEY)
            },

            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch('/movie/top_rated?language=pt-BR&api_key=' + API_KEY)
            },

            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch('/movie/top_rated?language=pt-BR&api_key=' + API_KEY)
            },

            {
                slug: 'documentaty',
                title: 'Documentário',
                items: await basicFetch('/movie/top_rated?language=pt-BR&api_key=' + API_KEY)

            },


        ]


    }

}