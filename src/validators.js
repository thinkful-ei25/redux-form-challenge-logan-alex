export const required = value => (value ? undefined: 'This field is required');

export const isNumber = value => (isNaN(Number(value)) && value.length === 5 ? undefined : 'This input should be numbers and exactly 5 numbers long');




