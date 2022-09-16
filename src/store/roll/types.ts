import { IRoll } from './../../models/index';

export interface rollState {
  rolls: IRoll[];
  loading: 'loading' | 'succeeded' | 'error';
}
