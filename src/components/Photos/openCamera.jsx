const [cameraPhoto, setCameraPhoto] = useState();
let camImg = {
  SaveToPhoto: true,
  mediatype: 'photo',
};
const openCamera = async () => {
  //alert('open camera');
  const perGrand = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
  );
  if (perGrand === PermissionsAndroid.RESULTS.GRANTED) {
    const result = launchCamera(camImg);
    setCameraPhoto(result.assets[1].uri);
  }
};
export default openCamera;
