import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import {
  updateProfileSuccess,
  updateProfileFailure,
  getProfilesSuccess,
  getProfilesFailure,
} from './actions';

export function* updateProfile({payload}) {
  try {
    const {name, id, ...rest} = payload.data;

    const profile = Object.assign(
      { name },
      rest.oldPassword ? rest : {},
    );

    console.log(profile);

    //const response = yield call(api.put, `users/${id}`, profile);

    // setTimeout(() => {
    //   window.location.reload();
    // }, 3000);

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil',
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
