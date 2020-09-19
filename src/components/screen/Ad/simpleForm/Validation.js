import * as yup from 'yup';

const validationSchema = yup.object().shape({
    title: yup.string().required(),
    price: yup.number().required(),
    describe: yup.string().required(),
    //visibleFrom: yup.string().required(),
    //visibleTo: yup.string().required(),
    
})
export default validationSchema;