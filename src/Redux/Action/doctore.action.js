import * as ActionTypes from "../ActionTypes"
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firbase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

//GET DOCTORE
export const getDoctore = () => async (dispatch) => {
  try {
    dispatch(loadingDoctore());
    const querySnapshot = await getDocs(collection(db, "doctore"));

    let data = [];

    querySnapshot.forEach((doc) => {

      data.push({ id: doc.id, ...doc.data() })



    });
    dispatch({ type: ActionTypes.GET_DOCTORE, payload: data })

  } catch (error) {
    dispatch(errorDoctore(error.message))
  }
}

export const loadingDoctore = () => (dispach) => {
  dispach({ type: ActionTypes.LOADING_DOCTORE })
}

export const errorDoctore = (error) => (dispach) => {
  dispach({ type: ActionTypes.ERROR_DOCTORE, payload: error })
}

//ADD DOCTORE
export const addDoctore = (data) => async (dispatch) => {
  try {
    const randomdoc = Math.floor(Math.random() * 1000000).toString();
    const doctoreRef = ref(storage, 'doctore/' + randomdoc);
    uploadBytes(doctoreRef, data.file)
      .then((snapshot) => {
        getDownloadURL(ref(snapshot.ref))
          .then(async (url) => {
            const docRef = await addDoc(collection(db, "doctore"),{
              name: data.name,
              age: data.age,
              city: data.city,
              department: data.department,
              url: url,
              fileName: randomdoc
            })
            dispatch({
              type: ActionTypes.POST_DOCTORE,
              payload: {
                id: docRef.id,
                name: data.name,
                age: data.age,
                city: data.city,
                department: data.department,
                url: url,
                fileName: randomdoc
              }
            })
          });
      });
  } catch (error) {
    dispatch(errorDoctore(error.message))
  }
}

//DELETE DOCTORE
export const deleteDoctore = (data) => async (dispatch) => {
  try {
    console.log(data);
    const docRef = ref(storage, 'doctore/' + data.fileName);

    deleteObject(docRef)
      .then(async () => {
        await deleteDoc(doc(db, "doctore", data.id));
        dispatch({ type: ActionTypes.DELETE_DOCTORE, payload: data.id })
      })
      .catch((error) => {
        dispatch(errorDoctore(error.message))
      });
  } catch (error) {
    dispatch(errorDoctore(error.message))
  }
}

//UPDATE DOCTORE
export const upadateDoctore = (data) => async (dispatch) => {
  try {
    const doctoreRef = doc(db, "doctore", data.id);

    if (typeof data.file === "string") {
      await updateDoc(doctoreRef, {
        name: data.name,
        age: data.age,
        city: data.city,
        department: data.department,
        // fileName: data.fileName,
        url: data.url
      });
      dispatch({ type: ActionTypes.UPADATE_DOCTORE, payload: data })

    } else {
      const docRef = ref(storage, 'doctore/' + data.fileName);
      deleteObject(docRef)
        .then(
          async () => {
            const randomdoc = Math.floor(Math.random() * 1000000).toString();
            const doctoreRefint = ref(storage, 'doctore/' + randomdoc);
            uploadBytes(doctoreRefint, data.file)
              .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                  .then(async (url) => {
                    await updateDoc(doctoreRef, {
                      name: data.name,
                      age: data.age,
                      city: data.city,
                      department: data.department,
                      fileName: randomdoc,
                      url: url
                    });

                    dispatch({
                      type: ActionTypes.UPADATE_DOCTORE,
                      payload: {
                        ...data,
                        fileName: randomdoc,
                        url: url
                      }
                    })
                  });
              });
          })
    }
  } catch (error) {
    dispatch(errorDoctore(error.message))
  }
}