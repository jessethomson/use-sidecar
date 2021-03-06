export interface IConfig {
  onError(e: Error): void;
}

export const config: IConfig = {
  onError: e => console.error(e),
};

export const setConfig = (conf: Partial<IConfig>) => {
  Object.assign(config, conf);
};