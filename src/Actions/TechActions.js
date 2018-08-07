const apiRoot = `${process.env.REACT_APP_API_ROOT}`;

export const listingSet = (type, listings) => ({type: `${type}_SET`, payload: listings});


export const fetchAllListings = () => dispatch => new Promise ( async (resolve, reject)  => {
    const routes = ['business', 'groups', 'events', 'education', 'city']
    apiRoot === 'undefined' && alert('We are now using hidden env variables for our api root, follow the readme docs. Ask Chad chapman for the url... or read this... its http://www.codetacoma.xyz')
    try  {
        Promise.all(routes.map( async (ele, index) => {
            const localStorageData = await localStorage.getItem(ele)
            if (!!localStorageData ) {
                dispatch(listingSet(ele, JSON.parse(localStorageData)))
            } else {
                let data = await fetch(`${apiRoot}/${ele}`);
                const prettyData = await data.json();
                dispatch(listingSet(ele, prettyData))
                localStorage.setItem(ele, JSON.stringify(prettyData))
            }
        })).then(() => resolve());
    }
    catch(error) {
        console.error('Whoops error in tech actions', error);
        
      }
    

});