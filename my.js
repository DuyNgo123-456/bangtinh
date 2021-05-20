function addition(){
    let So_thu_nhat = +document.getElementById('So_thu_nhat').value;
    let So_thu_hai = +document.getElementById('So_thu_hai').value;
    result_addition = So_thu_nhat+So_thu_hai;
    document.getElementById('result').innerHTML = "Result Addition: " + result_addition;
}
function subtraction(){
    let So_thu_nhat = +document.getElementById('So_thu_nhat').value;
    let So_thu_hai = +document.getElementById('So_thu_hai').value;
    result_subtraction = So_thu_nhat - So_thu_hai;
    document.getElementById('result').innerHTML = "Result Subtraction: " + result_subtraction;
}
function multiplication(){
    let So_thu_nhat = +document.getElementById('So_thu_nhat').value;
    let So_thu_hai = +document.getElementById('So_thu_hai').value;
    result_multiplication = So_thu_nhat * So_thu_hai;
    document.getElementById('result').innerHTML = "Result Multiplication: " + result_multiplication;
}
function division(){
    let So_thu_nhat = +document.getElementById('So_thu_nhat').value;
    let So_thu_hai = +document.getElementById('So_thu_hai').value;
    result_division = So_thu_nhat / So_thu_hai;
    document.getElementById('result').innerHTML = "Result Division: " + result_division;
}