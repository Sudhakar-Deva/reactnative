import {CameraIMG, LibraryIMG, signUpData} from './Actiontypes';

export const Camera = userData => {
  return {
    type: CameraIMG,
    payload: userData,
  };
};

export const Library = userData => {
  return {
    type: LibraryIMG,
    payload: userData,
  };
};

export const dataUser = userData => {
  return {
    type: signUpData,
    payload: userData,
  };
};
