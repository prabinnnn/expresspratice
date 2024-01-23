const result=(solution) =>
{
    retrun solution;
};
const itemfinder =(arr1,arr2,result)=>
{
    const answer=arr1.filter((food)=>arr2.includes(food));
    return result(answer)
};