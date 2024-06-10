import { useContext, useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../../styles/styleDashboard.scss';
import { obtainProduct, sendOffer } from '../../../services/dashboardService';
import ArrowLeftRight from '../ArrowLeftRight';
import { UserContext } from '../../../contexts/user.context';
import Spinner from '../spinner';

const validationSchema = Yup.object().shape({
    typeOfCurrency: Yup.string().required('El tipo de moneda es requerido'),
    typeOfOffer: Yup.string().required('El tipo de oferta es requerido'),
    amountOfOffer: Yup.number()
        .required('La cantidad es requerida')
        .positive('La cantidad debe ser positiva')
        .integer('La cantidad debe ser un número entero'),
});

const initialValues = { typeOfCurrency: '', typeOfOffer: '', amountOfOffer: 0 };

function CreateOffer() {
    const { loggedUser, assignUserInfo } = useContext(UserContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        obtainProduct().then((data)=> {
            data.length !== 0 ? setProducts(data) : setProducts([])
        });
    }, []);

    const findCrypto = (typeCurrency) => {
        return  products.length !== 0 ? 
        products.find(value => value.productName === typeCurrency)
            : 'Not found currency'
    };

    const managedOfferResponse = (wallet, currencyList, message) => {
        assignUserInfo({ ...loggedUser, wallet, currencyList, lastMessage: message });
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        const id = loggedUser.id;
        const crypto = findCrypto(values.typeOfCurrency).cryptoId;
        const quantity = values.amountOfOffer;
        let newData = await sendOffer({ "userId": id, "currencyId": crypto, "quantity": quantity }, values.typeOfOffer)
        console.log(newData)
        if (newData.wallet >= 0) {
            managedOfferResponse(newData.wallet, 
                newData.currencyDtoList, 
                `The transaction of ${values.typeOfOffer} has been completed successfully.`);
        } else {
            managedOfferResponse(loggedUser.wallet, 
                loggedUser.currencyList, 
                `An error occurred while completing the transaction of ${values.typeOfOffer}. No change was made.`);
        }
        setSubmitting(false);
    };

    const renderCurrencySelect = ({ values, handleChange }) => (
        <>
            <h1 className="title-form-init">Select your currency</h1>
            <select 
                name="typeOfCurrency" 
                className="form-select create-offer" 
                onChange={handleChange} 
                value={values.typeOfCurrency}
            >
                <option value="">Select your currency</option>
                { products.map((currency, index) => (
                    <option key={index} value={currency.productName}>
                        {currency.productName} - {currency.currentPrice} USD per Crypto
                    </option>
                ))}
            </select>
            <ErrorMessage name="typeOfCurrency" component="div" className="invalid-feedback" />
        </>
    );

    const renderOfferTypeRadio = () => (
        <>
            <h1 className="title-form-init">Select the type of the offer</h1>
            <div className="form-check form-check-inline">
                <Field className="form-check-input" type="radio" name="typeOfOffer" id="buy" value="buy" />
                <label className="form-check-label" htmlFor="buy">Buy</label>
            </div>
            <div className="form-check form-check-inline">
                <Field className="form-check-input" type="radio" name="typeOfOffer" id="sell" value="sell" />
                <label className="form-check-label" htmlFor="sell">Sell</label>
            </div>
            <ErrorMessage name="typeOfOffer" component="div" className="invalid-feedback" />
        </>
    );

    const renderAmountInput = ({ values }) => (
        <>
            <h1 className="title-form-init">Select the amount to offer</h1>
            <div className="mb-1">
                <label htmlFor="amountOfOffer" className="form-label icon-init">
                    {values.typeOfCurrency.length !== 0 ? findCrypto(values.typeOfCurrency).symbol : ''}
                </label>
                <Field type="number" className="form-control-sm" id="amountOfOffer" name="amountOfOffer" />
                <ErrorMessage name="amountOfOffer" component="div" className="invalid-feedback" />
                <ArrowLeftRight />
                <i>
                    {values.typeOfCurrency.length !== 0 ? 
                        (values.amountOfOffer * findCrypto(values.typeOfCurrency).currentPrice).toFixed(2)
                        : ''
                    } {' '} USD
                </i>
            </div>
        </>
    );

    return (
        <div className='forms-adjust-init'>
            <h1 className="title-create-offer">Buy a Crypto Currency</h1>
            { products.length !== 0 ? <Formik 
                initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={handleSubmit}
            >
                {({ values, handleChange }) => (
                    <Form className='forms-area-init'>
                        { renderCurrencySelect({ values, handleChange }) }
                        {renderOfferTypeRadio()}
                        {renderAmountInput({ values })}
                        <button type="submit" className="btn btn-primary submit-button-init">Submit</button>
                    </Form>
                )}
            </Formik> : <Spinner/> }
        </div>
    );
}

export default CreateOffer;
