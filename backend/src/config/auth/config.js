import { ExtractJwt } from 'passport-jwt';

export default {
    secretOrKey: 'U2FsdGVkX19Nkqz0UiQAw5Izbp4pQsNs2aQvWim3YVQSn4tFIp2bHWZIz0MSLGrE',
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT')
}