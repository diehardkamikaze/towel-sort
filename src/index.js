
// You should implement your task here.

module.exports = function towelSort (matrix) {
	var i;
	var j;
	var result;
	var flag;
	
	if (!matrix)
		return [];
	i = 0;
	result = [];
	while (i < matrix.length)
	{
		if (i % 2 != 0)
			flag = function(j) { return (matrix[i].length - 1 - j); }
		else
			flag = function(j) { return (j); }
		
		j = 0;
		while (j < matrix[i].length)
		{
			result.push(matrix[i][flag(j)]);
			j++;
		}
		i++;
	}
  return (result);
}
