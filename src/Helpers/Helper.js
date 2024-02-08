const shortenText = (text) => {
    return text.split(" ").slice(0 , 3).join("");
}

const searchProducts = ( products , search ) => {
    if( !search) return products;
    const searchProducts = products.filter(p => p.title.toLowerCase().includes(search));
    return searchProducts ; 
}

const filterProducts = ( products , category ) => {
    if ( !category  ) return products;
    const filterProducts = products.filter((p) => p.category === category)
    return filterProducts ; 
}

const createQueryObject = ( currentQuery , newQuery ) => {
    if ( newQuery.category === "all") {
        // eslint-disable-next-line no-unused-vars
        const { category, ...rest } = currentQuery;
        return rest ;
    }
    if ( newQuery.search === "" ) {
        // eslint-disable-next-line no-unused-vars
        const { search , ...rest } = currentQuery ;
        return rest;
    }
    return { ...currentQuery ,  ...newQuery };
    }

    const getInitialQuery = ( searchParams ) => {
        const query = {} ;
        const category = searchParams.get("category");
        const search = searchParams.get("search");
        if( category ) query.category = category ; 
        if( search ) query.search = search ; 
        return query ;
    };

export {shortenText , searchProducts ,filterProducts , createQueryObject , getInitialQuery } ; 