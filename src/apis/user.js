import request from '@/utils/request'

// 有访客
export const visitService = () => {
    return request.get('/hello')
}

// 注册接口
// 验证账号
export const usernameService = (username) => {
   return request.get('/user/usernameverify', {
        params: { username }
    })
}

// 验证手机号
export const phoneNumberService = (phoneNumber) => {
    return request.get('/user/phonenumberverify', {
        params: { phoneNumber }
    })
}

// 注册
export const userRegisterService = ({ username, password, phoneNumber, question, answer, avatar, nickname, inviteIdentifier, paymentInfo }) => {
    return request.post('/user/register', { username, password, phoneNumber, question, answer, avatar, nickname, inviteIdentifier, paymentInfo })
}

// 登录
export const userLoginService = ({ username, password }) => {
    return request.post('/user/login', { username, password })
}

// 找回密码用户名、手机号验证
export const resetPasswordVerifyService = ({ username, phoneNumber }) => {
    return request.post('/user/resetpassword/verify', { username, phoneNumber })
}

// 找回密码问题验证
export const answerMatchService = ({ username, answer }) => {
    return request.post('/user/resetpassword/match', { username, answer })
}

// 重置密码
export const resetPasswordSubmitService = ({ username, password }) => {
    return request.post('/user/resetpassword/submit', { username, password })
}

// 更换头像，一周一次，弃用
// export const avatarService = (id, newAvatarUrl) => {
//     return request.put(`/users/${id}/avatar`, { newAvatarUrl })
// }

// 修改头像
export const avatarService = (id, avatar) => {
    return request.post('/user/avatar', {id, avatar})
}

// 修改昵称
export const nicknameService = (id, nickname) => {
    return request.post('/user/nickname', { id, nickname })
}

// 获取验证码
export const smsService = (phoneNumber) => {
    return request.post('/sms/send', { phoneNumber })
}

// 校验验证码
export const codeVerifyService = (phoneNumber, verificationCode) => {
    return request.post('/sms/verify', { phoneNumber, verificationCode })
}

// 校验邀请码
export const checkIdentifierService = (identifier) => {
    return request.get('/identifiers/exists', {
        params: { identifier }
    })
}