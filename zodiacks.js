<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Document</title>
</head>
<body>	
<p><input id="today" type="radio" value="today" name="radio" class="radio" checked>сегодня</p>
<p><input id="tomorow" type="radio" value="tomorow" name="radio" class="radio">завтра</p>
<input id="znack" type="text">
<script>
let zodiacs = {
	'2020-02-24':{
		овен: ['Сегодня 	овен вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		рыбы: ['Сегодня рыбы вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		телец: ['Сегодня телец вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		близнецы: ['Сегодня близнецы вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		рак: ['Сегодня рак вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		лев: ['Сегодня лев вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		дева: ['Сегодня дева вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		весы: ['Сегодня весы вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		скорпион: ['Сегодня скорпион вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		стрелец: ['Сегодня стрелец вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		козерог: ['Сегодня 	козерог вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		водолей: ['Сегодня водолей вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
	},
	'2020-02-25':{
		овен: ['Завтра 	овен вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		рыбы: ['Завтра  рыбы вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		телец: ['Завтра  телец вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		близнецы: ['Завтра  близнецы вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		рак: ['Завтра  рак вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		лев: ['Завтра  лев вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		дева: ['Завтра  дева вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		весы: ['Завтра весы вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		скорпион: ['Завтра  скорпион вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		стрелец: ['Завтра  стрелец вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		козерог: ['Завтра 	козерог вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
		водолей: ['Завтра  водолей вам следует быть по возможности более практичным, нежели обычно. Даже самый маленький каприз может обернуться не самыми приятными последствиями'],
	},
}
let input = document.getElementById('znack');
let today = document.getElementById('today');
let tomorow = document.getElementById('tomorow');
input.addEventListener('blur', func);
function func(){
	let date2 ; 
	if (today.checked == true){
		let date = new Date();
 date2 = date.getFullYear() + '-' + addZero(date.getMonth()) + '-' + addZero(date.getDate());
}else{
	let date = new Date();
 date2 = date.getFullYear() + '-' + addZero(date.getMonth()) + '-' + addZero(date.getDate() +1);
	
}
	function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}
let sign = '';
let zodiack = input.value;
	if ( zodiack >= '05-22'  &&  zodiack <= '06-22' ) {
				sign = 'рак';
		}
		if ( zodiack >= '06-23'  &&  zodiack <= '07-21' ) {
				sign = 'лев';
		}
		if ( zodiack >= '07-22'   &&  zodiack <= '08-23' ) {
				sign = 'дева';
		}
		if ( zodiack >= '08-24'   &&  zodiack <= '09-23' ) {
				sign = 'весы';
		}
		if ( zodiack >= '09-24'   &&  zodiack <= '10-22' ) {
				sign = 'скорпион';
		}
		if ( zodiack >= '10-23'   &&  zodiack <= '11-22' ) {
				sign = 'стрелец';
		}
		if ( zodiack >= '11-23'   &&  zodiack <= '00-20' ) {
				sign = 'козерог';
		}
		if ( zodiack >= '00-21'   &&  zodiack <= '01-19' ) {
				sign = 'водолей';
		}
		if ( zodiack >= '01-20'   &&  zodiack <= '02-20' ) {
				sign = 'рыбы';
		}
		if ( zodiack >= '02-21'   &&  zodiack <= '03-20' ) {
				sign = 'овен';
		}
		if ( zodiack >= '03-21'   &&  zodiack <= '04-21' ) {
				sign = 'телец';
		}
		if ( zodiack >= '04-22'   &&  zodiack <= '05-21' ) {
				sign = 'близнецы';
		}
		document.write(zodiacs[date2][sign]);
}
</script>
</body>
</body>
</html>
