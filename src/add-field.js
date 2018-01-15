/**
 * add a field to a collection. This is an immutable function. It creates a new collection but does not modify the original collection
 * @throws {Error} [[Description]]
 * @alias addField
 * @param   {Collection}     collection data collection
 * @param   {string}         field      name of new field
 * @param   {function|Array} value      either an array to use as the data or a function that accepts the record as first argument
 * @returns {Collection}     the original collection with the added field
 */
module.exports = function(collection, field, value){
	if(Array.isArray(value)){
		return collection.map((record,index)=>{
			let fieldObject = {};
			fieldObject[field] = value[index];
			return Object.assign({},record,fieldObject);
		});
	}else if(typeof value === 'function'){
		return collection.map((record,index)=>{
			let fieldObject = {};
			fieldObject[field] = value(record);
			return Object.assign({},record,fieldObject);
		});
	}else{
		throw new Error('addField second argument must be an array of values or a function');
	}
};