import { useContext, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { UserContext } from "../../contexts/user.context";
import { rechargeWallet } from "../../services/dashboardService";
import "../../styles/styleDashboard.scss";

// Define a validation schema with Yup
const validationSchema = Yup.object().shape({
  amountToRecharge: Yup.number()
    .required("La cantidad es requerida")
    .positive("La cantidad debe ser positiva"),
});

// Initial values for Formik
const initialValues = { amountToRecharge: 0 };

function RechargeDollars() {
  const { loggedUser, assignUserInfo } = useContext(UserContext);

  const managedOfferResponse = (wallet, currencyList, message) => {
    assignUserInfo({
      ...loggedUser,
      wallet,
      currencyList,
      lastMessage: message,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (values, { setSubmitting }) => {
    const newData = await rechargeWallet(
      loggedUser.id,
      values.amountToRecharge
    );
    if (newData.wallet > 0) {
      managedOfferResponse(
        newData.wallet,
        loggedUser.currencyList,
        `The wallet recharge has been successful.`
      );
    } else {
      managedOfferResponse(
        loggedUser.wallet,
        loggedUser.currencyList,
        `An error occurred while reloading the wallet. No change was made.`
      );
    }
    setSubmitting(false);
  };

  useEffect(() => {}, [loggedUser]);

  return (
    <div className="forms-adjust-init container-recharge">
      <h1 className="title-create-offer">Recharge Dollars</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="forms-area-init form-recharge">
            <h1 className="title-form-init">Enter the amount to recharge</h1>
            <div className="mb-1">
              <label
                htmlFor="amountToRecharge"
                className="form-label icon-init"
              >
                USD
              </label>
              <Field
                type="number"
                className="form-control-sm"
                id="amountToRecharge"
                name="amountToRecharge"
              />
              <ErrorMessage
                name="amountToRecharge"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary submit-button-init"
            >
              Recharge
            </button>
          </Form>
        )}
      </Formik>
      <p className="note-init">
        Note: Every amount that you recharge will be sent to your personal bank
        account.
      </p>
    </div>
  );
}

export default RechargeDollars;
