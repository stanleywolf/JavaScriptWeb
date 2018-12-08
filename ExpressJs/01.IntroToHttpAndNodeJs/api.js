const data = [

];

function getBiId(id) {
    return dat[id];
}
function getAll() {
    return data;
}
function update(id,value) {
    data[id] = value
}

module.exports = {
    getBiId,
    getAll,
    update
}