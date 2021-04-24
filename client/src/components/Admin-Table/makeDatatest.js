// import namor from 'namor'

// const range = len => {
//   const arr = []
//   for (let i = 0; i < len; i++) {
//     arr.push(i)
//   }
//   return arr
// }

// const newPerson = () => {
//   const statusChance = Math.random()
//   return {
//     franchise_id: namor.generate({  numbers: 1, words: 0}),
//     product_id: namor.generate({  numbers: 1, words: 0 }),
//     quantity: Math.floor(Math.random() * 30),
//     id: Math.floor(Math.random() * 100),
//   }
// }

// export default function makeData(...lens) {
//   const makeDataLevel = (depth = 0) => {
//     const len = lens[depth]
//     return range(len).map(d => {
//       return {
//         ...newPerson(),
//         subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
//       }
//     })
//   }

//   return makeDataLevel()
// }
