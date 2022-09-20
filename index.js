// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

const mondayWork = function (work= "go to the office") {
    return `This Monday, I will ${work}.`
}
mondayWork();

function wrapAdjective(pam1 ="*") {
    return function(pam2 = "special") {
        return `You are ${pam1}${pam2}${pam1}!`
    }

}
wrapAdjective("%")("a dedicated programmer");