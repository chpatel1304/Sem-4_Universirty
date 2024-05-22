function fun(x)
{
 console.log(++x)
}
setTimeout(function()
{
 fun(1);
},3000)
