import { Schema } from 'normalizr';
import { ITransform } from "./ITransform";
export interface IReturnedDatumInfo {
    normalizrSchema: Schema;
    transformerSchema: ITransform;
    extendErrorCheck?: string;
    targetParameterName?: string;
}
