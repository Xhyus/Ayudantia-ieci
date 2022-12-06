import * as yup from 'yup';

const productValidation = yup.object({
    name: yup.string()
        .min(3, "Debe contener minimo 3 caracteres")
        .max(50, "Debe contener maximo 50 caracteres")
        .required("El nombre es obligatorio")
        .matches(/^[a-zA-Z0-9 ]*$/, "El nombre no puede contener caracteres especiales"),
    price: yup.number()
        .min(1, "El precio debe ser mayor a 0")
        .required("El precio es obligatorio"),
    quantity: yup.number()
        .min(1, "La cantidad debe ser mayor a 0")
        .required("La cantidad es obligatoria"),
    description: yup.string()
        .min(3, "Debe contener minimo 3 caracteres")
        .max(150, "Debe contener maximo 150 caracteres")
        .required("La descripcion es obligatoria"),
})

export default productValidation


// name: {
//     type: String,
//     required: true
// },
// price: {
//     type: Number,
//     required: true
// },
// quantity: {
//     type: Number,
//     required: true
// },
// description: {
//     type: String,
//     required: true
// },
// category: {
//     type: Schema.ObjectId,
//     ref: 'category'
// }