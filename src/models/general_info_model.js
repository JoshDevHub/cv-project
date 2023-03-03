import { objectWithDefault } from "../utils/object_helpers";

const createEmptyStringDefaults = objectWithDefault("");

const GeneralInfoModel = (data = {}) => {
  const { name, address, phoneNumber, email } = data;

  return createEmptyStringDefaults(
    { name, address, phoneNumber, email},
  )
}

export default GeneralInfoModel;
