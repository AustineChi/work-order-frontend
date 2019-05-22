export function onC(uom){
    let u = List.filter(m=>{
        if(m.slug == uom){
            return m.name;
        } 
    });
    return (u['0'] != undefined)? u['0'] : {};
}

