const root = "http://www.codetacoma.xyz";
export const listingSet = (type, listings) => ({type: `${type}_SET`, payload: listings});


export const fetchAllListings = () => dispatch => new Promise ( async (resolve, reject)  => {


    const routes = ['business', 'groups', 'events', 'education', 'city']
    try  {
        Promise.all(routes.map( async (ele, index) => {
            let data = await fetch(`${root}/${ele}`);
            const prettyData = await data.json();
            dispatch(listingSet(ele, prettyData))
        })).then(() => resolve());
    }
    catch(error) {
        console.error('Whoops error in tech actions', error);
        
      }
    

});