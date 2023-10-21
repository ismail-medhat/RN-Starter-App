import * as Yup from "yup";
import { useTranslation } from "react-i18next";
const { t } = useTranslation();
// Some Validation With Regular Expression
const nameRegExp =
  /^[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFFa-zA-Z0-9]+(?:[\s._-][\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFFa-zA-Z0-9]+)*$/;
const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const SAMobileRegEX = /^((\+966)|(00966)|0)?5[0-9]{8}$/;

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .required(t("This field is required"))
    .matches(emailRegExp, t("Email not valid")),
  password: Yup.string().required(t("This field is required")),
});

const editProfileValidationSchema = Yup.object({
  name: Yup.string().required(t("This field is required")),
  mobile: Yup.string().required(t("This field is required")),
});

const resetPassValidationSchema = Yup.object({
  password: Yup.string().required(t("This field is required")),
  confirmPassword: Yup.string()
    .required(t("This field is required"))
    .oneOf([Yup.ref("password")], t("Passwords must match")),
});

const changePassValidationSchema = Yup.object({
  password: Yup.string().required(t("This field is required")),
  newPassword: Yup.string()
    .required(t("This field is required"))
    .notOneOf(
      [Yup.ref("password")],
      t("New password should be different from old password")
    ),
  confirmPassword: Yup.string()
    .required(t("This field is required"))
    .oneOf([Yup.ref("newPassword")], t("Passwords must match")),
});

const forgetPassValidationSchema = Yup.object({
  email: Yup.string()
    .required(t("This field is required"))
    .matches(emailRegExp, t("Email not valid")),
});

const logNCRValidationSchema = Yup.object({
  department_id: Yup.string().required(t("This field is required")),
  location: Yup.string().required(t("This field is required")),
  reportNo: Yup.string().required(t("This field is required")),
  serialNo: Yup.string().required(t("This field is required")),
  revoke: Yup.string().required(t("This field is required")),
  sevirity: Yup.string().required(t("This field is required")),
  correctionDate: Yup.string().required(t("This field is required")),
  nonConfirmity: Yup.string().required(t("This field is required")),
  requirements: Yup.string().required(t("This field is required")),
  NCRPhotos: Yup.string().required(t("This field is required")),
});

const takeActionsValidationSchema = Yup.object({
  date: Yup.string().required(t("This field is required")),
  correction: Yup.string().required(t("This field is required")),
  cause: Yup.string().required(t("This field is required")),
  actions: Yup.string().required(t("This field is required")),
  inspection: Yup.string().required(t("This field is required")),
});

const updateNCRValidationSchema = Yup.object({
  department: Yup.string().required(t("This field is required")),
  location: Yup.string().required(t("This field is required")),
  reportNo: Yup.string().required(t("This field is required")),
  serialNo: Yup.string().required(t("This field is required")),
  revoke: Yup.string().required(t("This field is required")),
  sevirity: Yup.string().required(t("This field is required")),
  date: Yup.string().required(t("This field is required")),
  nonConfirmity: Yup.string().required(t("This field is required")),
  requirements: Yup.string().required(t("This field is required")),
});

export {
  loginValidationSchema,
  logNCRValidationSchema,
  takeActionsValidationSchema,
  updateNCRValidationSchema,
  forgetPassValidationSchema,
  resetPassValidationSchema,
  editProfileValidationSchema,
  changePassValidationSchema,
};
