export default function calculateDiversionRate(recycleValue, compostValue, wasteValue) {
    let diversionValue = (recycleValue + compostValue)/(recycleValue + compostValue + wasteValue)
    diversionValue = parseInt(diversionValue * 100)
    return diversionValue
}
