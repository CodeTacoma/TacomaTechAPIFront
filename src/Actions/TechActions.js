const root = "http://www.codetacoma.xyz";
export const listingSet = (type, listings) => ({type: `${type}_SET`, payload: listings});


export const fetchAllListings = () => dispatch => new Promise ( async (resolve, reject)  => {
    const routes = ['business', 'groups', 'events', 'education', 'city']
    try  {
        Promise.all(routes.map( async (ele, index) => {
            const localStorageData = await localStorage.getItem(ele)
            if (!!localStorageData ) {
                dispatch(listingSet(ele, JSON.parse(localStorageData)))
            } else {
                let data = await fetch(`${root}/${ele}`);
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