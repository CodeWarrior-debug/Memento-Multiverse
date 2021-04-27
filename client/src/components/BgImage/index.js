// import React, { useState } from 'react';
// import Select from 'react-select';

// function BgImage() {
//     var image = [
//         {
//             value: 1,
//             label: "../../images/cat.png"
//         },
//         {
//             value: 2,
//             label: "../../images/office.png"
//         },
//         {
//             value: 3,
//             label: "../../images/family.png"
//         },
//         {
//             value: 4,
//             label: "../../images/stage.png"
//         },
//         {
//             value: 5,
//             label: "../../images/tool.png"
//         }

//     ];
//     var [setbgimage, bgvalue] = useState(image.label)
//     var bghandle = e => {
//         bgvalue(e.label)
//     }

//     return (
//         <>
//             <style>{`body {background-image: url('`+setbgimage+`');}`}</style>  THIS ONE
//             <Select options={image} onChange={bghandle}></Select>
//         </>
//     )
// }
// export default BgImage