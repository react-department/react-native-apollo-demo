import type IProject from './IProject';

export type THandleCreateScreen = (id: number) => void;

export interface IHome {
  onCreateProject: () => void;
  projects?: IProject[];
  onCreateScreen: THandleCreateScreen;
}
