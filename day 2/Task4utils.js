export function formatCurrency(amount){
      return amount.toFixed(2)
}
export function generatRandomId(){
    return Math.floor(Math.random() * 10000)
}
export function getTodayDate(){
    return new Date().toLocaleDateString()
}