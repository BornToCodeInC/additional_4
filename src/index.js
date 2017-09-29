module.exports = function multiply(first, second) {
  var array_first = first.split('');
	var array_second = second.split('');

	var array_inter = [];
	var array_inter_counter = 0;

	var array_final = [];
	var array_final_counter = 0;

	for (let i = array_second.length - 1; i >= 0; i--)
	{
		array_inter[array_inter_counter] = [];

		let flag = 0;

		for (let j = array_first.length - 1; j >= 0; j--)
		{
			let inter_value = array_second[i] * array_first[j];

			inter_value += flag;

			if (inter_value.toString().length === 1)
			{
				if (flag > 0) flag = 0;

				array_inter[array_inter_counter].push(inter_value.toString());

				if (j === 0)
				{
					array_inter[array_inter_counter] = array_inter[array_inter_counter].reverse();
				}
			}

			else if (j !== 0)
			{
				flag = parseInt(inter_value.toString().charAt(0));

				array_inter[array_inter_counter].push(inter_value.toString().charAt(inter_value.toString().length - 1));
			}

			else
			{
				if (flag > 0) flag = 0;

				array_inter[array_inter_counter] = array_inter[array_inter_counter].concat(inter_value.toString().split('').reverse()).reverse();
			}
		}

		array_inter_counter++;
	}

	for (let i = 0; i < array_inter_counter; i++)
	{
		if (array_inter[i].length <= array_first.length)
			array_inter[i].unshift("0");
	}

	for (let i = 0, j = array_inter_counter - 1; i < array_inter_counter, j >= 0; i++, j--)
	{
		array_inter[i] = array_inter[i].concat("0".repeat(i).split(''));

		array_inter[i] = array_inter[i].reverse().concat("0".repeat(j).split('')).reverse();
	}

	array_final[array_final_counter] = [];

	for (let j = array_inter[0].length - 1; j >= 0; j--)
	{
		array_final[array_final_counter].push(array_inter[0][j]);
	}

	array_final[array_final_counter] = array_final[array_final_counter].reverse();

	array_final_counter++;

	for (let i = 0; i < array_inter_counter - 1; i++)
	{
		array_final[array_final_counter] = [];
		
		let flag = 0;

		for (let j = array_inter[i].length - 1; j >= 0; j--)
		{
			let inter_value = parseInt(array_final[i][j]) + parseInt(array_inter[i + 1][j]);

			inter_value += flag;

			//if (j === array_inter[i].length - 1 && inter_value === 0) continue;

			if (inter_value.toString().length === 1)
			{
				if (flag > 0) flag = 0;

				array_final[array_final_counter].push(inter_value.toString());
			}

			else if (j !== 0)
			{
				flag = parseInt(inter_value.toString().charAt(0));

				array_final[array_final_counter].push(inter_value.toString().charAt(inter_value.toString().length - 1));
			}

			else
			{
				if (flag > 0) flag = 0;

				array_final[array_final_counter] = array_final[array_final_counter].concat(inter_value.toString().split(''));
			}
		}

		array_final[array_final_counter] = array_final[array_final_counter].reverse();

		array_final_counter++;
	}

	var result = array_final[array_final_counter - 1].join('').toString();

	while (result.charAt(0) === "0")
		result = result.substring(1);

	return result;
}
