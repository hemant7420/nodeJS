var grades=[50,100,40,10];
var sum=0;
grades.forEach(function(grade){
	sum+=grade;
});
console.log(sum);
console.log(sum/grades.length);