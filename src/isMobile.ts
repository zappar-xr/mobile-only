import mobile from 'is-mobile';

export default (ua?: string) : boolean => mobile({ tablet: true, featureDetect: true, ua });
