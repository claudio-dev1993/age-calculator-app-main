function validateInputs(day, month, year) { 
    if (day === '' || (month === '' || !(month >= 1 && month <= 12) )|| year === '') {
        console.log('error');
        return false
    } else if (day === '' || !(day >= 1 && day <= 31) || day === 31 && month === 4) {
        console.log('error');
        return false
    } else if (year > new Date().getFullYear()) {
        console.log('error');
        return false
    }
 
}

function calculateDate() {
    const currentDate = new Date()
    const inputDate = {
        day: parseInt(document.getElementById('day').value),
        month: parseInt(document.getElementById('month').value),
        year: parseInt(document.getElementById('year').value),
    }

    const resultDate = {
        day: document.getElementById('resultDay'),
        month: document.getElementById('resultMonth'),
        year: document.getElementById('resultYear'),
    }

    if (validateInputs(inputDate.day, inputDate.month, inputDate.year) === false) {
        resultDate.year.textContent = '--'
        resultDate.month.textContent = '--'
        resultDate.day.textContent = '--'
    } else {
        resultDate.year.textContent = currentDate.getFullYear() - inputDate.year - 1
        resultDate.month.textContent = currentDate.getMonth() + 1
        resultDate.day.textContent = currentDate.getDate()
    }

}






const form = document.getElementById('mainForm').addEventListener('submit', (ev) => {
    ev.preventDefault()

    calculateDate()

})