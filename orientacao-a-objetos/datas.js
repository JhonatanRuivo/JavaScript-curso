// ------------------------------------------ DATAS -------------------------------------------------------
let date = new Date() // Em Javascript temos classes prontas a serem utilizadas como exemplo de data

const monthDay = date.getDate() // Dia do mês
const weekDay = date.getDay() // Dia da semana
const month = date.getMonth() // Mês do ano
const year = date.getFullYear() // Ano atual

console.log(year)

// -------------------------------------EXERCÍCIO PARA CALCULAR DIFERENÇA DE DIAS ---------------------

const schedulingDay = new Date('01/20/2024')
const appointmentDay = new Date('01/15/2024') // Podemos declarar a classe passando para o construtor dela uma data específica
const schedulingTime = schedulingDay.getTime() // Pegamos o valor da data em milissegundos da data do construtor
const appointmentTime = appointmentDay.getTime() // Pegamos o valor da data atual em milissegundos
const daysToAppointment =
  (schedulingTime - appointmentTime) / (1000 * 3600 * 24) // Para transformar o getTime de milissegundos para dia
// utilizamos a divisão por 1000 para transformar em segundos
alert(daysToAppointment) // depois multiplicamos por 3600 para transformar em horas
// e agora multiplicamos por 24 para transformar em dia.
