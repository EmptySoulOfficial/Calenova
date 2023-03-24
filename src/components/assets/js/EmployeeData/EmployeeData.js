import * as employeesData from '../userMocks/employeesData.json'

const employeesObj = JSON.parse(JSON.stringify(employeesData)).default

export const emplObj = () => employeesObj;