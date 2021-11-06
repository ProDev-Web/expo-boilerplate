/* eslint-disable import/prefer-default-export */
/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import * as $AT from '@actions/ActionTypes';
import { dispatcher } from '@helpers/redux';
import { IAppReducer } from '@helpers/Types/IApp';

/**
* Change value for Global Reducer
* @param  {object} payload
* @ {
* @  `property`: `string`,
* @  `value`: `value`,
* @ } */
export const appStateChange = (payload :IAppReducer): void => dispatcher({ type: $AT.APP_STATE_CHANGE, payload });