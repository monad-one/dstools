/**
 * Sort the data collection in ascending order
 * @alias sort
 * @param   {string|number|function} byField The field to use for sorting - can be a function in which the data object is its first argument
 * @returns {Collection}             The sorted collection
 */
module.exports = function(data, byField){
	//create ret array
	let ret = Array.from(data);
	let byFieldFunction = byField;
	if(typeof byField !== 'function'){
		console.assert(typeof byField === 'string','sort argument should be comparing function or name of field');
		byFieldFunction = function(a,b){
			if(a[byField] < b[byField]){
				return -1;
			}else if(a[byField] > b[byField]){
				return 1;
			}else{
				return 0;
			}
		};
	}
	return ret.sort(byFieldFunction);
};
