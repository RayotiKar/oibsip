


const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const unitAvail = document.getElementById('temp_diff');
    const unitSelected = temp_diff.options[unitAvail.selectedIndex].value;
    
    const celToFah = (cel) => {
        let fahv = ((cel * 9 / 5) + 32).toFixed(2);
        return fahv;
    }

    const fahToCel = (fah) => {
        let celv = ((fah - 32) * 5 / 9).toFixed(2);
        return celv;
    }

    if (unitSelected == 'cel') {
        document.getElementById("result").innerHTML = celToFah(numberTemp) + "&#176;F";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(numberTemp) + "&#176;C";
    }
    /*let result;
    if(valueTemp == 'cel')
    {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = '${result}°Fahrenheit';

    }
    else
    {
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = '${result}°Celsius';

    }*/

    
}   