import { objectWithDefault } from "../utils/object_helpers";

const createEmptyStringDefaults = objectWithDefault("");

const GeneralInfoModel = (data = {}) => {
  const { name, address, phoneNumber, email, jobTitle } = data;

  return createEmptyStringDefaults(
    { name, address, phoneNumber, email, jobTitle }
  )
}

export default GeneralInfoModel;
